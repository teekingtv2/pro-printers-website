/* eslint-disable @next/next/no-img-element */
import CustomFormik from '@/utils/CustomFormik';
import { contactValues } from '@/utils/initialValues';
import { validateContact } from '@/utils/validate';
import Link from 'next/link';
import React from 'react';
import { FaMailBulk, FaPhone, FaSearchLocation } from 'react-icons/fa';
import InputField from '../globals/forms/InputField';
import SubmitButton from '../globals/forms/SubmitButton';
import { useRouter } from 'next/navigation';
import { contact } from '@/api';

const ContactBody = () => {
  const router = useRouter();
  const initialValues = contactValues();
  const validationSchema = validateContact();

  const handleSubmit = async (values, { resetForm }) => {
    console.log('values:', values);
    // const res = await contact(values);
    // if (res.status === 200) {
    //   successNotification(res.data);
    //   resetForm();
    //   setTimeout(() => {
    //     router.push('/');
    //   }, 3000);
    // } else {
    //   errorNotification(res.data);
    // }
  };

  return (
    <div className="flex w-full h-full bg-[#ffffff] text-[#060F3A]">
      <div className="py-[70px] md:pt-[100px] md:pb-[100px] container">
        <div className="text-[28px] font-[800] mb-7 md:mb-10 text-center">Get in touch with us</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-0 items-center">
          <div className="col-span-1 py-10 px-7 md:px-10 rounded-lg banner boxShadow-sm text-[#ffffff]">
            <div className="text-[15px] font-medium">
              Our lovely team will love to hear from you
            </div>
            <div className="mt-7 w-full">
              <CustomFormik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div className="col-span-1">
                    <div className="mb-1 text-[14px] font-semibold">First Name</div>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                  <div className="col-span-1">
                    <div className="mb-1 text-[14px] font-semibold">Last Name</div>
                    <InputField name="last_name" placeholder="Last name" />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <div className="mb-1 text-[14px] font-semibold">Address</div>
                    <InputField name="address" placeholder="Address" />
                  </div>
                  <div className="col-span-1">
                    <div className="mb-1 text-[14px] font-semibold">Email Address</div>
                    <InputField name="email" placeholder="Email Address" />
                  </div>
                  <div className="col-span-1">
                    <div className="mb-1 text-[14px] font-semibold">Phone Number</div>
                    <InputField name="phone" placeholder="Phone Number" />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <div className="mb-1 text-[14px] font-semibold">Question</div>
                    <InputField name="question" placeholder="Question" />
                  </div>
                  <div className="col-span-1 md:col-span-2 flex justify-center">
                    <SubmitButton
                      className="mt-10 py-3 rounded-xl primaryBtnn w-[60%] text-sm flex justify-center items-center"
                      title="Contact us"
                    />
                  </div>
                </div>
              </CustomFormik>
            </div>
          </div>
          <div className="col-span-1 p-5 rounded-lg ">
            <img
              src="/images/vectors/support-2.png"
              className="w-[80%] text-center dancingSlide"
              alt={process.env.APP_NAME}
            />
          </div>
        </div>
        <div className="mt-[50px] md:mt-[70px] md:w-[40%] mx-auto px-5 updown">
          <div className="text-[20px] font-[800] mb-5"> Our Contact Details</div>
          <div className="flex gap-3 font-bold justify-between items-center contact-card mb-3">
            <div className="flex text-[16px] gap-2 items-center">
              <FaMailBulk />
              <span>EMail Us:</span>
            </div>
            <div className="">
              <Link href="mailto:info@vedcausa.org">info@vedcausa.org</Link>
            </div>
          </div>
          <div className="flex gap-3 font-bold justify-between items-center contact-card mb-3">
            <div className="flex text-[16px] gap-2 items-center">
              <FaPhone />
              <span>Phone Us:</span>
            </div>
            <div className="">
              <Link href="tel:609-929-0960">609-929-0960</Link>
            </div>
          </div>
          <div className="flex gap-3 font-bold justify-between items-center contact-card mb-3">
            <div className="flex text-[16px] gap-2 items-center">
              <FaSearchLocation />
              <span>Address:</span>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
