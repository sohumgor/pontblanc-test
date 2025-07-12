
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company: string;
  projectOverview: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, projectOverview }: ContactEmailRequest = await req.json();

    console.log("Sending contact email for:", name, email);

    const emailResponse = await resend.emails.send({
      from: "PontBlanc Contact Form <onboarding@resend.dev>",
      to: ["sohum1759@gmail.com"],
      reply_to: email,
      subject: `Business Inquiry from ${name} - ${company}`,
      html: `
        <h2>New Business Inquiry from PontBlanc Website</h2>
        <p><strong>Contact Details:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Company:</strong> ${company}</li>
        </ul>
        
        <p><strong>Project Overview:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #0066cc; margin: 10px 0;">${projectOverview.replace(/\n/g, '<br>')}</p>
        
        <hr style="margin: 20px 0;">
        <p><em>This inquiry was submitted through the PontBlanc website contact form at ${new Date().toLocaleString()}.</em></p>
        <p><strong>Reply directly to this email to respond to ${name} at ${email}</strong></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
