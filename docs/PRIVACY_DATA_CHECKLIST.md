# Privacy Data Verification Checklist

This document is for internal use to ensure that the claims made in `privacy/index.html` accurately reflect the technical implementation of the Daily Ledger application.

**Do not publish the website until the development team confirms these points.**

## 1. Data Storage & Accounts
- [ ] **Google Sign-In**: Confirm exactly what data is requested from the Google OAuth scope (email, profile name, profile picture?).
- [ ] **Backend / MongoDB**: Does Daily Ledger store transactions on a central backend database? Or is it local-only with cloud backups? The privacy policy must explicitly state where data lives.

## 2. Backups
- [ ] **Google Drive Backup**: Does the app use the user's hidden App Data folder in Drive, or a visible file? Can Nagabyte developers access this backup? (Usually, the answer is no).
- [ ] **Local Backup**: Is the exported local backup file encrypted? If so, what type of encryption is used (standard AES, etc.)?

## 3. Telemetry & Advertising
- [ ] **AdMob**: Is Google AdMob configured to serve personalized or non-personalized ads? Are you requesting user consent (e.g., via Google UMP) in the app before showing ads?
- [ ] **Crash Reporting / Analytics**: Are you using Firebase Crashlytics or Google Analytics? If yes, this must be added to the Privacy Policy.

## 4. Bank Statement & AI Processing
- [ ] **OCR/AI Processing**: When a user imports a PDF, how is it processed? Is it sent to an external API (like OpenAI/Gemini)?
- [ ] **AI Data Retention**: What is the data retention policy of the AI provider? (e.g., OpenAI API does not use data for training, retained for 30 days). This must be disclosed.
- [ ] **PDF Storage**: Is the raw bank statement PDF ever saved to your backend servers, or just processed in memory/on device?

## 5. Deletion Mechanisms
- [ ] **Account Deletion**: Ensure that if a user emails the support address, there is an internal standard operating procedure (SOP) to actually wipe their data from the database.
- [ ] **Data Deletion**: Ensure users can delete individual transactions or their entire ledger from within the app.
