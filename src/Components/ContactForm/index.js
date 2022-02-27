import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {

const [processing, setProcessing] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setProcessing(true)
    if (
      formInfo.name.length > 1 &&
      formInfo.email.length > 1 &&
      formInfo.message.length > 1
    ) {
      emailjs
        .send(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          formInfo,
          process.env.USER_ID
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
    } else {
      alert("Input fields cannot be blank");
      setProcessing(false)
    }
  };
  return (
    <form onSubmit={onSubmit}>
        <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">Send me a message!</h3>
                <p class="mt-1 text-sm text-gray-500">I will reply as soon as I :)</p>
            </div>

            <div class="grid-cols-6 gap-6">

                <div class="col-span-6 sm:col-span-4 mb-4 w-2/3 m-auto border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                    <label for="name" class="block text-xs font-medium text-gray-900">Name</label>
                    <input type="text"  
                    name="name"
                    value={formInfo.name}
                    onChange={handleFormChange} 
                    id="name" 
                    class=" text-center block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" 
                    placeholder="Jane Doe"/>
                </div>

                <div class="col-span-6 sm:col-span-4 mb-4 w-2/3 m-auto border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                    <label for="email" class="block text-xs font-medium text-gray-900">Email Address</label>
                    <input type="email"
                    name="email"
                    value={formInfo.email}
                    onChange={handleFormChange} 
                    class="border-none text-center block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" 
                    placeholder="example@example.com"/>
                </div>


                <div class="col-span-6 sm:col-span-4 mb-4 w-2/3 m-auto rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                    <div className="flex items-start space-x-4">
                        <div className="min-w-0 flex-1">
                            <div className="border-b border-gray-200 focus-within:border-indigo-600">
                                <label htmlFor="comment" className="sr-only">
                                Add your comment
                                </label>
                                <textarea
                                rows="3"
                                name="message"
                                value={formInfo.message}
                                onChange={handleFormChange}
                                className="block w-full border-0 border-b border-transparent p-0 pb-2 resize-none focus:ring-0 focus:border-indigo-600 sm:text-sm"
                                placeholder="Add your comment..."
                                defaultValue={''}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                
                </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
            </div>
        </div>
    </form>
  )
}
