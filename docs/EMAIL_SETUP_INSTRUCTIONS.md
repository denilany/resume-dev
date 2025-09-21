# Email Contact Form Setup Instructions

Your contact form is now configured to send emails to **denilanyonyi1@gmail.com** using EmailJS. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or your preferred email provider
4. Follow the setup instructions to connect your email account
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply-to: {{reply_to}}
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_abcdef123456`)

## Step 5: Update Your Code

Open `script.js` and replace these placeholders:

```javascript
// Line 2: Replace with your actual public key
emailjs.init("YOUR_PUBLIC_KEY");

// Line 188: Replace with your service and template IDs
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**Example:**
```javascript
emailjs.init("user_abcdef123456");
emailjs.send('service_gmail', 'template_contact', templateParams)
```

## Step 6: Test Your Contact Form

1. Open your portfolio website
2. Fill out the contact form
3. Submit the form
4. Check your email at denilanyonyi1@gmail.com

## Security Notes

- Your EmailJS public key is safe to expose in client-side code
- EmailJS handles the secure email sending
- All emails will be sent to denilanyonyi1@gmail.com as configured
- The sender's email will be included in the message content and as reply-to

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Emails not received**: Check spam folder, verify EmailJS service setup
- **Rate limits**: Free plan allows 200 emails/month
- **Need help**: Contact EmailJS support or check their documentation

## Alternative: Direct Email Link

If you prefer a simpler solution, you can replace the form with a direct email link:

```html
<a href="mailto:denilanyonyi1@gmail.com?subject=Contact from Portfolio&body=Hi Denil,%0D%0A%0D%0A">
    Send Email
</a>
```

Your contact form is now ready to receive emails at denilanyonyi1@gmail.com!
