'use strict';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
/**
  * It's a mailer function
  * @param {object} form - has informations about client
  * @return {string} valid email information
  */
async function EventFormMailer(form) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const styles = {
      'background-color': '#F0F0F0',
      'padding': '25px 0',
      'font-size': '15px',
      'font-family': 'Georgia',
      'line-height': '25px',
    };

    const styles2 = {
      'max-width': '600px',
      'min-width': '300px',
      'width': 'auto',
      'margin': '0 auto',
      'text-align': 'center',
    };

    const fullName = form.name + ' ' + form.surname;
    const mailOptions = {
      to: form.email,
      subject: form.subject,
      html:
        `<div style="${styles}">
          <div style="${styles2}">
              <div style="text-align: left;">
                 <p>Thank you ${fullName} for joining our event.<br/>
                 Some informations about it are below.</p>
                 <p>
                  ${form.formName.length < 1 ?
          '' :
          'Title: ' + form.formName + '<br/>'}
                  Date: ${form.date}
                  </p>
              </div>
          </div>
      </div>`,
    };
    const resp = transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error);
        return error;
      } else return true;
    });
    return resp;
  } catch (err) {
    return err;
  }
}

export default EventFormMailer;
