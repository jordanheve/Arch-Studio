import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function FormSection() {
  const [nameAlert, setNameAlert] = useState('');
  const [emailAlert, setEmailAlert] = useState('');
  const [messageAlert, setMessageAlert] = useState('');
  const [nameAlertClass, setNameAlertClass] = useState('');
  const [emailAlertClass, setEmailAlertClass] = useState('');
  const [messageAlertClass, setMessageAlertClass] = useState('');
    const [hiddenClass, setHiddenClass] = useState('')
    const [successClass, setSuccessClass] = useState(' hidden')
  const handleSubmit = (e) => {
    const alertInputClass = 'border-red-400 placeholder-red-300';

    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name.trim()) {
      setNameAlert("Can't be empty");
      setNameAlertClass(alertInputClass);
    } else {
      setNameAlert('');
      setNameAlertClass('');
    }

    if (!email.trim()) {
      setEmailAlert("Can't be empty");
      setEmailAlertClass(alertInputClass);
    } else if (!validateEmail(email)) {
      setEmailAlert("Invalid email address");
      setEmailAlertClass(alertInputClass);
    } else {
      setEmailAlert('');
      setEmailAlertClass('');
    }

    if (!message.trim()) {
      setMessageAlert("Can't be empty");
      setMessageAlertClass(alertInputClass);
    } else {
      setMessageAlert('');
      setMessageAlertClass('');
    }
    if (name.trim() && validateEmail(email) && message.trim()) {
        setHiddenClass("hidden")
        setSuccessClass("")
      }
  };

  const handleInputChange = (e) => {
    const { name } = e.target;

    // Elimina el estado de alerta cuando se produce un cambio en los campos
    switch (name) {
      case 'name':
        setNameAlert('');
        setNameAlertClass('');
        break;
      case 'email':
        setEmailAlert('');
        setEmailAlertClass('');
        break;
      case 'message':
        setMessageAlert('');
        setMessageAlertClass('');
        break;
      default:
        break;
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  let inputClass = 'w-full outline-none  p-6 border-b-2 text-lg';
  let alertClass = 'absolute right-2 bottom-2 font-semibold text-red-400 ';

  return (
    <section className="flex">
      <h3 className="text-7xl font-bold max-w-sm">Connect With Us</h3>
      <div className="w-full ">
        <div className={"flex flex-col justify-center items-center"+successClass}>
            <CheckCircleIcon className="h-56"/>
            <h4 className="text-2xl font-semibold">Message successfully sent!</h4>
        </div>
      <form
        className={"flex flex-col "+ hiddenClass}
        noValidate
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="relative">
          <input
            className={`${inputClass} ${nameAlertClass}`}
            placeholder="Name"
            aria-label="Type your name"
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
          />
          <span className={alertClass}>{nameAlert}</span>
        </div>
        <div className="relative">
          <input
            className={`${inputClass} ${emailAlertClass}`}
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleInputChange}
          />
          <span className={alertClass}>{emailAlert}</span>
        </div>
        <div className="relative">
          <textarea
            placeholder="Message"
            className={`resize-none ${inputClass} ${messageAlertClass}`}
            name="message"
            onChange={handleInputChange}
          ></textarea>
          <span className={alertClass}>{messageAlert}</span>
        </div>
        <div className="flex justify-end -mt-1">
          <button
            className="bg-black p-4 w-fit hover:opacity-75"
            aria-label="submit"
            type="submit"
          >
            <ArrowRightIcon className="h-8 text-white" />
          </button>
        </div>
      </form>
      </div>
    </section>
  );
}
