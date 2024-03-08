import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = JSON.parse(await req.text());

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "vibemagnetmarketing@gmail.com",
      pass: process.env.VIBEMAGNET_GMAIL_APP_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "vibemagnetmarketing@gmail.com",
    to: body.user.email,
    subject: body.subject,
    html: `
    <div style="background-color: white; padding: 28px; margin: 36px; margin-top: 64px; margin-bottom: 0px; border: 1px solid; border-radius: 15px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-color: #d6d3d1;">
    <p class="serif" style="font-size: 20px; font-weight: 500;">VibeMagnet Marketing <span style="color: #6366f1;">Careers</span></p>
    <p style="font-size: 24px; font-weight: 500;">Hey ${body.data.firstName}, we just received your job application!</p>
    <p style="font-size: 16px; font-weight: 400;">Hey there ${body.data.firstName}! We've processed your job application at VibeMagnet for the position: ${body.data.jobPos}. Here's some of the information we got from you:</p>
    <div style="display: flex;">
    <div style="background-color: #f5f5f4; padding: 10px; border-top-left-radius: 10px; border-bottom-left-radius: 10px; border: 1px solid #d6d3d1;">
    <p style="color: #78716c;">Your name</p>
    <p style="font-size: 15px; text-decoration: underline; text-decoration-color: #0ea5e9; text-decoration-thickness: 2px;">${body.data.firstName} ${body.data.lastName}</p>
    </div>
    <div style="background-color: #f5f5f4; padding: 10px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border: 1px solid #d6d3d1; border-left: 0px;">
    <p style="color: #78716c;">Applying for the position</p>
    <p style="color: #6366f1; border: 1px solid; padding: 2px 5px; border-radius: 5px; background-color: #e0e7ff;">${body.data.jobPos}</p>
    </div>
    </div>
      <p style="font-size: 16px; font-weight: 400;">You can see information about your application, as well as your interview status and other information, on our <u>Job Portal</u> on the VibeMagnet website.</p>
    <p style="font-size: 16px; font-weight: 400;">Regards,<br />VibeMagnet Marketing</p>
    <p style="font-size: 12px; font-weight: 300; color: #78716c;">If you don't recognize the contents of this email or don't remember doing anything related to this, you can ignore it.</p>
    </div>
    <div style="background-image: linear-gradient(to right, #e0e7ff , #a5b4fc); color: #6366f1;
     padding: 28px; padding-top: 8px; padding-bottom: 8px; margin: 36px; margin-top: 0px; border: 1px solid; border-color: #6366f1; border-radius: 15px; border-top-left-radius: 0px; border-top-right-radius: 0px; font-size: 16px; display: flex;">
        <p>VibeMagnet Marketing</p>
    </div>
    `,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      return NextResponse.json({ status: 500, err: err });
    }
  });

  return NextResponse.json({ status: 200 });
}
