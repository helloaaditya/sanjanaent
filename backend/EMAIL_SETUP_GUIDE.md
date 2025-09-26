# Email Notification Setup Guide

## Gmail Configuration

To enable email notifications for contact forms and quote requests, you need to configure Gmail environment variables.

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. In Google Account settings, go to Security → 2-Step Verification
2. Scroll down to "App passwords"
3. Click "App passwords"
4. Select "Mail" as the app
5. Select "Other" as the device and enter "Sanjana Enterprises Backend"
6. Copy the generated 16-character password

### Step 3: Set Environment Variables

#### For Local Development:
Create a `.env` file in the `backend/` directory:

```env
# Gmail Configuration for Email Notifications
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password

# Optional: Custom notification recipient
NOTIFY_TO=admin@yourcompany.com

# Optional: Admin dashboard URL
ADMIN_URL=https://your-admin-dashboard.com/admin
```

#### For Production (Render.com):
1. Go to your Render dashboard
2. Select your backend service
3. Go to Environment tab
4. Add these environment variables:
   - `GMAIL_USER`: your-email@gmail.com
   - `GMAIL_APP_PASSWORD`: your-16-character-app-password
   - `NOTIFY_TO`: admin@yourcompany.com (optional)
   - `ADMIN_URL`: https://your-admin-dashboard.com/admin (optional)

### Step 4: Test Configuration

After setting up the environment variables:

1. Restart your backend server
2. Submit a test contact form or quote request
3. Check the server logs for email notification status
4. Verify that emails are received

### Troubleshooting

#### Common Issues:

1. **"Email not configured" error**
   - Ensure `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set
   - Check that the app password is correct (16 characters, no spaces)

2. **"Connection timeout" error (Common on Render.com)**
   - This is a known issue with Render.com's free tier and Gmail SMTP
   - The system now handles timeouts gracefully - leads are still saved
   - Consider upgrading to Render.com's paid plan for better email reliability
   - Alternative: Use SendGrid or other email services

3. **"Email service connection failed" error**
   - Verify 2-Factor Authentication is enabled
   - Regenerate the app password
   - Check that the Gmail account is not locked

4. **"Authentication failed" error**
   - Double-check the app password
   - Ensure the email address is correct
   - Try generating a new app password

5. **Emails not being received**
   - Check spam/junk folder
   - Verify the `NOTIFY_TO` email address
   - Check server logs for detailed error messages
   - Note: On Render.com free tier, email timeouts are common but leads are still saved

#### Render.com Specific Issues:

**Connection Timeouts**: Render.com's free tier has limitations with SMTP connections. The system now uses a **background email processing** approach:
- ✅ **Immediate response**: API returns success immediately (no more 500 errors)
- ✅ **Background processing**: Emails are sent asynchronously without blocking the UI
- ✅ **Shorter timeouts**: 10-second timeout for email sending
- ✅ **Graceful failure**: If email fails, it's logged but doesn't affect the user experience
- ✅ **Leads always saved**: Database operations are separate from email notifications

**How it works now**:
1. User submits form → Lead saved to database → Success message shown immediately
2. Email notification is processed in the background
3. If email fails, it's logged but doesn't affect the user

**Solutions for Render.com**:
1. **Current solution**: Background processing (recommended)
2. **Upgrade to paid plan**: Better network reliability
3. **Use SendGrid**: More reliable for cloud platforms

### Security Notes

- Never commit the `.env` file to version control
- Use app passwords instead of your main Gmail password
- Regularly rotate app passwords for security
- Consider using a dedicated Gmail account for notifications

### Email Template

The system sends professional HTML emails with:
- Lead details (name, email, phone, message)
- Lead type (Contact Message or Quote Request)
- Link to admin dashboard
- Company branding

### Support

If you continue to have issues:
1. Check the server logs for detailed error messages
2. Verify all environment variables are set correctly
3. Test with a simple email first before using the full system
