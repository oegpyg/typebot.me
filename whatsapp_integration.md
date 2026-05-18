In order to be able to test your bot on WhatsApp from the Preview drawer, you need to set up a WhatsApp business app.

Requirements
​
1. Create a WhatsApp Meta app
​
2. Get the System User token

    Go to your System users page and create a new system user that has access to the related.

    Token expiration: Never
    Available Permissions: whatsapp_business_messaging, whatsapp_business_management

    The generated token will be used as META_SYSTEM_USER_TOKEN in your viewer configuration.
    Click on Add assets. Under Apps, look for your app, select it and check Manage app

​
3. Get the phone number ID

    Go to your WhatsApp Dev Console
    WhatsApp dev console
    Add your phone number by clicking on the Add phone number button.
    Select the newly created phone number in the From dropdown list and you will see right below the associated Phone number ID This will be used as WHATSAPP_PREVIEW_FROM_PHONE_NUMBER_ID in your viewer configuration.

​
4. Set up the webhook

    Head over to Quickstart > Configuration. Edit the webhook URL to $NEXTAUTH_URL/api/v1/whatsapp/preview/webhook. Set the Verify token to $ENCRYPTION_SECRET and click on Verify and save.
    Add the messages webhook field.

​
5. Set up the message template

    Head over to Messaging > Message Templates and click on Create Template
    Select the Utility category
    Give it a name that corresponds to your WHATSAPP_PREVIEW_TEMPLATE_NAME configuration.
    Select the language that corresponds to your WHATSAPP_PREVIEW_TEMPLATE_LANG configuration.
    You can format it as you’d like. The user will just have to send a message to start the preview.

Parameter	Default	Description
META_SYSTEM_USER_TOKEN		The system user token used to send WhatsApp messages
WHATSAPP_PREVIEW_FROM_PHONE_NUMBER_ID		The phone number ID from which the message will be sent
WHATSAPP_PREVIEW_TEMPLATE_NAME		The preview start template message name
WHATSAPP_PREVIEW_TEMPLATE_LANG	en_US	The preview start template message name
WHATSAPP_CLOUD_API_URL	https://graph.facebook.com	The WhatsApp Cloud API base URL
WHATSAPP_INTERACTIVE_GROUP_SIZE	3	The array size of items to send to API on choice input. You can’t choose a number higher than 3 if you are using the official cloud API URL.