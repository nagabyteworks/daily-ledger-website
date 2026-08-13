# Privacy Policy & Legal Review Checklist

This document is for internal use only to track unverified legal and technical details that must be resolved prior to finalizing the public application release. 

**DO NOT PUBLISH OR LINK THIS DOCUMENT ON THE PUBLIC WEBSITE.**

## Missing Legal Information
These items require confirmation from the organization's stakeholders or legal counsel:
- [ ] **Legal Entity Name**: Currently referring generally to "Nagabyte". The exact registered business name needs to be confirmed.
- [ ] **Business Address**: Required for Google Play Console depending on monetization status. (Missing).
- [ ] **Privacy Contact Email**: Currently using `support@nagabyte.com`. Need to verify if a dedicated `privacy@nagabyte.com` is preferred.
- [ ] **Terms of Service Limitations**: Need legal review of the liability disclaimers regarding financial advice and any potential AI-generated results.
- [ ] **Subscriptions**: If Daily Ledger adds subscriptions or in-app purchases, the Terms of Service must be updated to reflect Apple/Google payment terms.

## Unverified Technical Implementations
These items require confirmation from the development team regarding how data is actually handled in the app architecture:
- [ ] **Data Storage**: Does the app store financial transactions on a central backend (e.g., MongoDB), or is it 100% local device storage with Google Drive backup? 
- [ ] **Google Sign-In Scopes**: Verify exactly which OAuth scopes the app requests. The policy currently assumes basic email and profile info.
- [ ] **Google Drive Backup Access**: Verify that Nagabyte (the company) does *not* have access to the user's Google Drive backup files.
- [ ] **Local Backup Encryption**: Verify what specific encryption standard is used for local backups (it is not password protected, but we need to ensure the standard AES encryption claim is accurate).
- [ ] **AdMob Configuration**: Is AdMob configured to serve personalized or non-personalized ads? Is the Google UMP SDK implemented for European users?
- [ ] **Notification Types**: Are push notifications handled locally on the device (AlarmManager/Local Notifications) or via a server (Firebase Cloud Messaging)? 

## Excluded Features (Awaiting Implementation)
These sections were removed from the public Privacy Policy because they are not currently implemented. When they launch, they must be added back:
- [ ] **Bank Statement PDF Processing**: How does the flow work? Where are PDFs uploaded?
- [ ] **AI Processing / OCR**: Which AI provider is used? What is their data retention policy? (e.g., OpenAI API 30-day retention).

## Account Deletion
- [ ] **In-App Deletion**: Google Play requires an in-app deletion path if account creation is offered. The current website directs users to email support. This is a stopgap. A real in-app deletion button and corresponding backend cleanup API must be built and verified.
