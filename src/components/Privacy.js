import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
      {title}
    </h2>
    <div className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
      {children}
    </div>
  </div>
);

const TableRow = ({ cells, isHeader = false }) =>
  isHeader ? (
    <tr className="bg-gray-100 dark:bg-gray-700/60">
      {cells.map((c, i) => (
        <th key={i} className="px-4 py-2 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
          {c}
        </th>
      ))}
    </tr>
  ) : (
    <tr className="border-b border-gray-100 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800/30">
      {cells.map((c, i) => (
        <td key={i} className="px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300">
          {c}
        </td>
      ))}
    </tr>
  );

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Page content */}
      <main className="max-w-2xl mx-auto px-6 sm:px-8 pt-12 pb-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors group"
          >
            <FaArrowLeft className="text-[10px] group-hover:-translate-x-0.5 transition-transform" />
            Portföye Dön
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-12"
        >
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">Privacy Policy</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400 dark:text-gray-600">
            <span>Billable: Freelance Time Tracker</span>
            <span>·</span>
            <a href="mailto:ataemirkaba@gmail.com" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">ataemirkaba@gmail.com</a>
            <span>·</span>
            <span>June 4, 2026</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {/* Introduction */}
          <Section title="Introduction">
            <p>
              This Privacy Policy explains how <strong>Billable: Freelance Time Tracker</strong> ("the App") — developed and maintained by <strong>Ata Emir Kaba</strong> 
            </p>
            <p>
              We have a fundamental commitment to your privacy. Billable was built on the principle that your freelance data — your clients, projects, tracked hours, and earnings — belongs exclusively to you. The App operates entirely on your local device, without requiring any account creation, cloud synchronization, or transmission of personal data to any third-party servers owned or operated by us.
            </p>
            <p>
              By downloading or using the App, you acknowledge that you have read and understood this Privacy Policy. If you disagree with any part of this policy, please discontinue use of the App.
            </p>
          </Section>

          {/* Section 1 */}
          <Section title="1. Information We Collect">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">1.1 Information We Do NOT Collect</h3>
            <p><strong>Billable does not collect, store, access, or transmit any of the following personal information:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-2">
              <li>Full name, username, or profile details</li>
              <li>Email address or phone number</li>
              <li>Location data (GPS, IP-based, or otherwise)</li>
              <li>Device identifiers (IDFA, IDFV, IMEI, or similar)</li>
              <li>Usage analytics, crash reports, or behavioral telemetry</li>
              <li>Browsing history or activity outside the App</li>
              <li>Financial or banking details</li>
              <li>Photos, contacts, calendars, or microphone data</li>
              <li>Any biometric data</li>
            </ul>
            <p>We have no backend server, no analytics dashboard, and no system that tracks how you use the App.</p>

            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">1.2 Information Stored Locally on Your Device</h3>
            <p>All data you create and manage within the App is stored <strong>exclusively and locally on your own device</strong>. This includes:</p>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 mt-2">
              <table className="w-full text-sm">
                <thead><TableRow isHeader cells={['Data Type', 'Description']} /></thead>
                <tbody>
                  <TableRow cells={['Companies & Clients', 'Business names, contact details you manually enter']} />
                  <TableRow cells={['Projects', 'Project names, descriptions, hourly or flat rates']} />
                  <TableRow cells={['Time Logs', 'Start/end timestamps, durations, work notes/descriptions']} />
                  <TableRow cells={['Active Timers', 'Currently running timer state']} />
                  <TableRow cells={['Invoices & Earnings', 'Generated billing records, payment status']} />
                  <TableRow cells={['App Preferences', 'Theme, currency, onboarding status, subscription state cache']} />
                </tbody>
              </table>
            </div>
            <p className="mt-2">
              This data is written to your device's private application container using{' '}
              <a href="https://isar.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Isar</a>{' '}
              and <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">SharedPreferences</code>, both of which are inaccessible to other apps and are never synced to external servers by us.
            </p>

            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">1.3 Anonymous Purchase Data (RevenueCat)</h3>
            <p>The only external service the App communicates with is <strong>RevenueCat</strong>, which is used strictly for in-app subscription management. See Section 4 for full details.</p>
          </Section>

          {/* Section 2 */}
          <Section title="2. How We Use Information">
            <p>Since we do not collect personal information, the use of your data is limited to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-2">
              <li><strong>Local app functionality only</strong> — Your data is read from and written to device storage solely to power the App's features.</li>
              <li><strong>Subscription state verification</strong> — An anonymous, non-personally-identifiable identifier is used by RevenueCat to verify your premium subscription.</li>
            </ul>
            <p>We do not use any of your data for advertising, marketing, profiling, machine learning, or any purpose beyond operating the core features of the App.</p>
          </Section>

          {/* Section 3 */}
          <Section title="3. Data Storage & Security">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">3.1 Local-Only Architecture</h3>
            <p>Billable is architected as a fully <strong>offline-first, local-only</strong> application. Your data is never uploaded to any server operated by us. There are no accounts, no cloud sync, and no remote backups performed by us.</p>

            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">3.2 Device Security</h3>
            <p>The security of your data is governed by your device's own security mechanisms:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-2">
              <li><strong>App Sandboxing:</strong> iOS enforces strict app sandboxing — no other app can access Billable's local data.</li>
              <li><strong>Device Encryption:</strong> Data is protected by Apple's hardware-level encryption when your device is locked.</li>
              <li><strong>No Plaintext Transmission:</strong> Because we do not transmit your app data anywhere, it is never exposed over a network.</li>
            </ul>

            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">3.3 Your Responsibility</h3>
            <p>As all data resides on your device, you are responsible for keeping your device secured, managing backups (iCloud or Finder), and protecting access from unauthorized users.</p>
          </Section>

          {/* Section 4 */}
          <Section title="4. Third-Party Service Processors">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">4.1 RevenueCat</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 mt-2 mb-3">
              <table className="w-full text-sm">
                <thead><TableRow isHeader cells={['Detail', 'Information']} /></thead>
                <tbody>
                  <TableRow cells={['Provider', 'RevenueCat, Inc.']} />
                  <TableRow cells={['Purpose', 'Manage, validate, and restore in-app purchase subscriptions']} />
                  <TableRow cells={['Data Shared', 'An anonymous App User ID (not linked to any personal identity)']} />
                  <TableRow cells={['Personal Data Shared', 'None']} />
                  <TableRow cells={['Privacy Policy', 'revenuecat.com/privacy']} />
                </tbody>
              </table>
            </div>
            <p><strong>What RevenueCat receives:</strong> A randomly generated anonymous user ID, Apple-issued purchase receipts (opaque tokens), and subscription state.</p>
            <p><strong>What RevenueCat does NOT receive:</strong> Your name, email, contact details, time tracking data, project names, or client information.</p>

            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">4.2 Apple App Store</h3>
            <p>
              When you purchase a subscription, payment is processed exclusively by <strong>Apple</strong>. We never see, receive, or store your payment card details, billing address, or Apple ID.
              Apple's{' '}
              <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">privacy policy</a>{' '}
              governs this transaction.
            </p>
          </Section>

          {/* Section 5 */}
          <Section title="5. Subscription & Billing Terms">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">5.1 Subscription Plans</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-2">
              <li><strong>Monthly Premium</strong> — Billed every 30 days</li>
              <li><strong>Yearly Premium</strong> — Billed every 12 months (best value)</li>
            </ul>

            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">5.2 Payment & Billing</h3>
            <p>Payment is charged to your Apple ID / iTunes account at the time of purchase confirmation. Prices may vary by region as determined by the App Store.</p>

            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">5.3 Auto-Renewal</h3>
            <p>Subscriptions automatically renew unless cancelled. Your iTunes account will be charged within <strong>24 hours prior</strong> to the end of the current period.</p>

            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">5.4 Free Trial (If Offered)</h3>
            <p>If a free trial is offered, it will be clearly disclosed before purchase. Any unused portion of a free trial is forfeited when a subscription is purchased during the trial period.</p>

            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">5.5 Cancellation</h3>
            <p>Cancel auto-renewal at any time via <strong>Settings → [Your Name] → Subscriptions</strong>. Cancellation must be made at least 24 hours before the end of the billing period. You retain access until the end of the current paid period.</p>

            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">5.6 Refunds</h3>
            <p>
              All refund requests are handled exclusively by Apple. Visit{' '}
              <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">reportaproblem.apple.com</a>{' '}
              or contact Apple Support.
            </p>

            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">5.7 Subscription Restoration</h3>
            <p>Use the "Restore Purchases" option in the App to restore your subscription after reinstalling or switching devices.</p>
          </Section>

          {/* Section 6 */}
          <Section title="6. App Permissions">
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><TableRow isHeader cells={['Permission', 'Usage', 'Required']} /></thead>
                <tbody>
                  <TableRow cells={['No permissions required by default', 'Core time tracking, project management, and invoicing work without any special permissions', '—']} />
                  <TableRow cells={['Photo Library (Optional)', 'Only if you choose to export or share invoice data as an image', 'Optional']} />
                  <TableRow cells={['Mail / Email Access (Optional)', 'Only if you use the "Send Invoice via Email" feature', 'Optional']} />
                </tbody>
              </table>
            </div>
            <p className="mt-2">We do <strong>not</strong> request permissions for: Camera, Microphone, Contacts, Calendar, Location, Bluetooth, Face ID/Touch ID for authentication, or Health data.</p>
          </Section>

          {/* Section 7 */}
          <Section title="7. Data Retention & Deletion">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">7.1 Retention</h3>
            <p>Your data is retained on your device for as long as you use the App. Since all data is stored locally, retention is under your full control.</p>

            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mt-4">7.2 Deleting Your Data</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-2">
              <li><strong>Delete individual records:</strong> Remove companies, projects, time logs, or invoices directly within the App.</li>
              <li><strong>Delete all App data:</strong> Uninstalling the App permanently removes all locally stored data. <strong>This action is irreversible.</strong></li>
              <li><strong>iCloud Backups:</strong> If your device backs up to iCloud, manage those backups through your iCloud settings.</li>
            </ul>
            <p>We hold no copy of your data. Once you delete the App, there is nothing for us to delete on our end.</p>
          </Section>

          {/* Section 8 */}
          <Section title="8. Children's Privacy">
            <p>Billable is not directed at children under the age of 13. We do not knowingly collect any personal information from children. Since the App does not collect any personal information from any user, it is inherently compliant with <strong>COPPA</strong> and equivalent regulations.</p>
            <p>
              If you believe a child has provided personal information through the App, please contact us at{' '}
              <a href="mailto:ataemirkaba@gmail.com" className="text-blue-600 dark:text-blue-400 underline">ataemirkaba@gmail.com</a>.
            </p>
          </Section>

          {/* Section 9 */}
          <Section title="9. International Users & GDPR">
            <p>Billable is available globally. Since we do not collect, process, or transfer any personal data, GDPR and similar regulations (CCPA, PIPEDA) have minimal applicability. However, we are committed to upholding their spirit:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 ml-2">
              <li><strong>Right of Access:</strong> All your data is on your device — you have full access at all times.</li>
              <li><strong>Right to Erasure:</strong> Delete the App to permanently remove all associated data.</li>
              <li><strong>Right to Data Portability:</strong> Your data is stored locally, not locked in any proprietary cloud system.</li>
              <li><strong>No Automated Decision-Making:</strong> We do not profile users or make automated decisions based on personal data.</li>
              <li><strong>No Data Transfers:</strong> We do not transfer personal data across international borders.</li>
            </ul>
          </Section>

          {/* Section 10 */}
          <Section title="10. Changes to This Privacy Policy">
            <p>We may update this Privacy Policy periodically to reflect changes in App functionality, third-party services, or legal requirements. When material changes are made, the <strong>"Last Updated"</strong> date will be revised, and for significant changes we may notify you via an in-app notice.</p>
            <p>Continued use of the App after changes constitutes your acceptance of the updated policy.</p>
          </Section>

          {/* Section 11 */}
          <Section title="11. Contact Us">
            <p>If you have any questions, concerns, or requests related to this Privacy Policy:</p>
            <div className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <p><strong>Developer:</strong> Ata Emir Kaba</p>
              <p className="mt-1"><strong>Email:</strong>{' '}
                <a href="mailto:ataemirkaba@gmail.com" className="text-blue-600 dark:text-blue-400 underline">ataemirkaba@gmail.com</a>
              </p>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">We aim to respond to all privacy-related inquiries within 5 business days.</p>
            </div>
          </Section>

          {/* Section 12 */}
          <Section title="12. Summary of Key Privacy Commitments">
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead><TableRow isHeader cells={['Topic', 'Our Commitment']} /></thead>
                <tbody>
                  <TableRow cells={['Account Required', '❌ No account or registration needed']} />
                  <TableRow cells={['Personal Data Collected', '❌ We collect none']} />
                  <TableRow cells={['Data Sent to Our Servers', '❌ We have no backend servers']} />
                  <TableRow cells={['Local Data Storage', '✅ All data stays on your device']} />
                  <TableRow cells={['Third-Party Sharing', '⚠️ RevenueCat (anonymous IDs only, for subscriptions)']} />
                  <TableRow cells={['Advertising / Tracking', '❌ None whatsoever']} />
                  <TableRow cells={['Data Sold to Third Parties', '❌ Never']} />
                  <TableRow cells={["Children's Data", '❌ Not collected']} />
                  <TableRow cells={['Subscription Management', '✅ Via Apple App Store only']} />
                  <TableRow cells={['Data Deletion', '✅ Full control — delete the App to erase everything']} />
                </tbody>
              </table>
            </div>
          </Section>

          {/* Footer note */}
          <p className="text-xs text-center text-gray-400 dark:text-gray-600 mt-8 italic">
            This Privacy Policy was written to be transparent, human-readable, and comprehensive. If anything is unclear, please contact us at{' '}
            <a href="mailto:ataemirkaba@gmail.com" className="underline hover:text-gray-500">ataemirkaba@gmail.com</a>.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Privacy;
