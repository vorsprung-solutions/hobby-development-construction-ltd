import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function ResetPass() {
  const { handleSubmit, control, errors, watch } = useForm();
  const password = watch("password", "");

  const onSubmit = (data) => {
    // Handle form submission, e.g., send data to a server for password reset
    console.log(data);
  };

  return (
    <div className="w-full max-w-md my-6 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4 text-center">Reset Password</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
         Password
          </label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="password"
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            )}
          />
          {/* {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>} */}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: 'Confirm password is required',
              validate: (value) => value === password || 'Passwords do not match',
            }}
            render={({ field }) => (
              <input
                {...field}
                id="confirmPassword"
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            )}
          />
          {/* {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>} */}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPass;
