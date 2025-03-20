import React from "react";
import "./privacy-policy.css";

const PrivacyPolicy = () => {
  return (
    <div id="privacy-policy">
      <h1 className="privacy-policyh1">Privacy Policy for Chartify</h1>
      <p className="privacy-policy-pmain">
        <strong>Last Updated:</strong> March 2025
      </p>
      <div id="privacy-policy-content">
        <h2 className="privacy-policyh2">1. Information We Collect</h2>
        <p className="privacy-policy-p">
          We collect account details, communication metadata, and device usage
          data.
        </p>
        <h2 className="privacy-policyh2">2. How We Use Your Information</h2>
        <p className="privacy-policy-p">
          We use your data for providing chat, audio, and video call services
          while maintaining security.
        </p>
        <h2 className="privacy-policyh2">3. Data Sharing & Security</h2>
        <p className="privacy-policy-p">
          We do not sell or share your data. Communication is encrypted.
        </p>
        <h2 className="privacy-policyh2">4. Data Retention</h2>
        <p className="privacy-policy-p">
          We do not store photos or files. Users can delete their data anytime.
        </p>
        <h2 className="privacy-policyh2">5. Cookies & Tracking</h2>
        <p className="privacy-policy-p">
          Only essential cookies are used to maintain user sessions.
        </p>
        <h2 className="privacy-policyh2">6. User Rights</h2>
        <p className="privacy-policy-p">
          Users can request data deletion and access their information.
        </p>
        <h2 className="privacy-policyh2">7. Changes to This Policy</h2>
        <p className="privacy-policy-p">
          Updates will be communicated within the app.
        </p>
        <h2 className="privacy-policyh2">8. Contact Us</h2>
        <p className="privacy-policy-p">
          Email:{" "}
          <a
            href="mailto:dhakalsudip892@gmail.com.com"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            dhakalsudip892@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
