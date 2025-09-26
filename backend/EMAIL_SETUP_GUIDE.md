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

2. **"Email service connection failed" error**
   - Verify 2-Factor Authentication is enabled
   - Regenerate the app password
   - Check that the Gmail account is not locked

3. **"Authentication failed" error**
   - Double-check the app password
   - Ensure the email address is correct
   - Try generating a new app password

4. **Emails not being received**
   - Check spam/junk folder
   - Verify the `NOTIFY_TO` email address
   - Check server logs for detailed error messages

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
