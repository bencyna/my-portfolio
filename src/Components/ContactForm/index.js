import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./style.css"

export default function ContactForm() {

const [processing, setProcessing] = useState(false);
const [errors, setErrors] = useState({
  email: false,
  name: false,
  message: false
});
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setErrors({...errors, 
    [name]: false,
    })

    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let checkName = false;
    let checkEmail = false;
    let checkMessage = false;

    setProcessing(true)
    if (
      formInfo.name.length < 1 ||
      formInfo.email.length < 1 ||
      formInfo.message.length < 1
    ) {
      if ( formInfo.name.length < 1 ) {
        checkName = true
      }
      if ( formInfo.email.length < 1 ) {
        checkEmail = true
      }
      if ( formInfo.message.length < 1 ) {
        checkMessage = true
      }
      setErrors({
        name: checkName,
        email: checkEmail,
        message: checkMessage
      })
      setProcessing(false)

      return
    }
      emailjs
        .send(
          // process.env.REACT_APP_SERVICE_ID,
          // process.env.REACT_APP_TEMPLATE_ID,
          // formInfo,
          // process.env.REACT_APP_USER_ID
          "service_i6nctqq",//apiKeys.SERVICE_ID,
          "template_squm613",//apiKeys.TEMPLATE_ID,
          formInfo,
          "user_udBUM7rHhSFcq41CurXNX"//apiKeys.USER_ID
        )
        .then(
          function (response) {
            alert(
              "You're email has gone through, I will get back to you shortly!"
            );
            setFormInfo({ name: "", email: "", message: "" });
          },
          function (error) {
            console.log(error);
            alert(
              "Sorry, there was some sort of error, please try again or email me at: benjamincyn@gmail.com"
            );
          }
        );
        setProcessing(false)
    
  };
  return (
    <form onSubmit={onSubmit} className='h-full'>
        <div className="shadow sm:rounded-md sm:overflow-hidden h-full">
            <div className="bg-white py-6 px-4 space-y-6 sm:p-6 grid">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Send me a message!</h3>
                    <p className="mt-1 text-sm text-gray-500">I will reply as soon as I can :)</p>
                </div>

                <div className="grid-cols-6 gap-6">

                    <div 
                        className={errors.name ? "col-span-6 sm:col-span-4 mb-4 w-2/3 m-auto border border-gray-300 rounded-md px-3 py-2 shadow-sm border-red-500" :"my-10 col-span-6 sm:col-span-4  w-2/3 m-auto border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-0 focus-within:ring-green-300 focus-within:border-green-300"}>
                        <label htmlFor="name" className="block text-xs font-medium text-gray-900">Name</label>
                        <input type="text"  

                        name="name"
                        value={formInfo.name}
                        onChange={handleFormChange} 
                        id="name" 
                        className=" text-center block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        placeholder="Jane Doe"/>
                         {errors.name && (
                          <small className="text-red-400">
                            name cannot be blank
                          </small>
                        )}
                    </div>

                    <div className={errors.email ? "col-span-6 sm:col-span-4 mb-4 w-2/3 m-auto border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-0 ring-red-500 border-red-500" : "my-10 col-span-6 sm:col-span-4 mb-4 w-2/3 m-auto border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-0 focus-within:ring-green-300 focus-within:border-green-300"}>
                        <label htmlFor="email" className="block text-xs font-medium text-gray-900">Email Address</label>
                        <input type="email"
                        name="email"
                        value={formInfo.email}
                        onChange={handleFormChange} 
                        className="border-none text-center block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" 
                        placeholder="example@example.com"/>
                         {errors.name && (
                          <small className="text-red-400">
                            enter a valid email address
                          </small>
                        )}
                    </div>


                    <div className={errors.message ? "col-span-6 sm:col-span-4 mb-4 w-2/3 m-auto rounded-md px-3 py-2 shadow-sm ring-1 ring-red-500 focus-within:border-red-500" : " my-10 col-span-6 sm:col-span-4 mb-4 w-2/3 m-auto rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-green-300 focus-within:border-green-300"}>
                        <div className="flex items-start space-x-4">
                            <div className="min-w-0 flex-1">
                                <div className={errors.message ? "border-b border-gray-200 focus-within:border-red-500" : "border-b border-gray-200 focus-within:border-green-300"}>
                                    <label htmlFor="comment" className="sr-only">
                                    Add your comment
                                    </label>
                                    <textarea
                                    rows="3"
                                    name="message"
                                    value={formInfo.message}
                                    onChange={handleFormChange}
                                    className={errors.message ? "block w-full border-0 border-b border-transparent p-0 pb-2 resize-none focus:ring-0 border-red-500 focus:border-red-500 sm:text-sm" : "block w-full border-0 border-b border-transparent p-0 pb-2 resize-none focus:ring-0 focus:border-green-300 sm:text-sm"}
                                    placeholder="Add your comment..."
                                    />
                                </div>
                                  {errors.message && (
                                      <small className="text-red-400">
                                        you cannot leave the message empty
                                      </small>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-3 w-full bg-gray-50 text-right sm:px-6 absolute bottom-0">
            <button
                    disabled={processing}
                    type="submit"
                    id="submit"
                    className=" payBtn w-1/2 m-auto"
                  >
                    <span id="button-text">
                      {processing ? (
                        <div className="spinner" id="spinner"></div>
                      ) : (
                        <div className="inline-block">
                          Send
                        </div>
                      )}
                    </span>
                  </button>
            </div>
        </div>
    </form>
  )
}
