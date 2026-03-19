"use client";

import { useEffect } from "react";

interface GHLFormProps {
  formId: string;
  height?: number;
}

export default function GHLForm({ formId, height = 706 }: GHLFormProps) {
  useEffect(() => {
    // Load the GHL form embed script once
    const scriptId = "ghl-form-embed";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
      style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: "3px" }}
      id={`inline-${formId}`}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Contact Form"
      data-height={height}
      data-layout-iframe-id={`inline-${formId}`}
      data-form-id={formId}
      title="Contact Form"
    />
  );
}
