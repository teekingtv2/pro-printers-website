/* eslint-disable @next/next/no-img-element */

import { userRegister } from '@/api';
import CustomFormik from '@/utils/CustomFormik';
import { errorNotification, successNotification } from '@/utils/helpers';
import { registerValues } from '@/utils/initialValues';
import { validateRegister } from '@/utils/validate';
import { useRouter } from 'next/navigation';
import InputField from '../globals/forms/InputField';
import SubmitButton from '../globals/forms/SubmitButton';
import SelectTitleField from '../globals/forms/SelectTitleField';
import SelectCountryField from '../globals/forms/SelectCountryField';

const RegisterBody = () => {
  const router = useRouter();
  const initialValues = registerValues();
  const validationSchema = validateRegister();

  const handleSubmit = async (values, { resetForm }) => {
    console.log('values:', values);
    const res = await userRegister(values);
    console.log('res:', res);
    if (res.status === 200) {
      successNotification(res.data.message);
      resetForm();
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } else {
      errorNotification(res.data.message);
    }
  };

  return (
    <div className="flex w-full h-full bg-[#ffffff] text-[#060F3A]">
      <div className="py-[70px] md:pt-[100px] md:pb-[100px] container">
        <div className="text-[28px] font-[800] mb-7 md:mb-10 text-center">Time to Join Us</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-0 items-center">
          <div className="col-span-1 py-10 px-7 md:px-10 rounded-lg banner boxShadow-sm text-[#ffffff]">
            <div className="text-[15px] font-medium">
              Register with us and get onboarded. Join us in our mission to create positive change!
            </div>
            <div className="mt-7 w-full">
              <CustomFormik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div className="col-span-1">
                    <div className="mb-1 text-[14px] font-semibold">Title</div>
                    <SelectTitleField name="title" />
                  </div>
                  <div className="hidden md:block md:col-span-1"></div>

                  <div className="col-span-1">
                    <div className="mb-1 text-[14px] font-semibold">First Name</div>
                    <InputField name="first_name" placeholder="First name" />
                  </div>
                  <div className="col-span-1">
                    <div className="mb-1 text-[14px] font-semibold">Last Name</div>
                    <InputField name="last_name" placeholder="Last name" />
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
                    <div className="mb-1 text-[14px] font-semibold">Address</div>
                    <InputField name="address" placeholder="Address" />
                  </div>
                  <div className="col-span-1">
                    <div className="mb-1 text-[14px] font-semibold">City</div>
                    <InputField name="city" placeholder="City" />
                  </div>
                  <div className="col-span-1">
                    <div className="mb-1 text-[14px] font-semibold">State</div>
                    <InputField name="state" placeholder="State" />
                  </div>
                  <div className="col-span-1">
                    <div className="mb-1 text-[14px] font-semibold">Zip code</div>
                    <InputField name="zip_code" placeholder="Zip code" />
                  </div>
                  <div className="col-span-1">
                    <div className="mb-1 text-[14px] font-semibold">Country</div>
                    <SelectCountryField name="country" />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <div className="mb-1 text-[14px] font-semibold">More information about you</div>
                    <InputField name="info" placeholder="More info" />
                  </div>
                  <div className="col-span-1 md:col-span-2 flex justify-center">
                    <SubmitButton
                      className="mt-10 py-3 rounded-xl primaryBtnn w-[60%] text-sm flex justify-center items-center"
                      title="Register with us"
                    />
                  </div>
                </div>
              </CustomFormik>
            </div>
          </div>
          <div className="col-span-1 p-5 rounded-lg ">
            <img
              src="/images/vectors/collaborate.png"
              className="w-[80%] text-center dancingSlide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterBody;
