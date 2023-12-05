import React, {useState} from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import {TailSpin} from "react-loader-spinner";
// eslint-disable-next-line import/no-cycle
import {config} from "@/components/LoginMain";

// eslint-disable-next-line no-unused-vars
type OtpUp = (_email: string, _otp: string) => Promise<boolean>;
const OtpModal = ({
                             email,
                             updateOtp,
                             closeModal,
                         }: {
    email: string;
    updateOtp: OtpUp;
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleOtp = async () => {
        setLoading(true);
        if (otp.length < 6) {
            setLoading(false);
            setError('Wrong Otp');
            return;
        }
        try {
            const res = await updateOtp(email, otp);
            if (!res) throw new Error();
            setLoading(false);
            toast.success('Logged in successfully', config);
        } catch (err: any) {
            console.error(err);
            setError('Wrong Otp');
            setLoading(false);
        }
    };

    return (
        <div className="bg-black/20 absolute z-10 left-0 top-0 w-full h-full ">
            <div
                className="bg-white p-6 w-max rounded-lg grid gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="font-bold text-lg">Enter OTP</h2>
                <p>Please enter the OTP sent to {email}</p>
                <div className="w-max px-4">
                    <OTPInput
                        value={otp}
                        onChange={(e) => {
                            setOtp(e);
                            setError('');
                        }}
                        numInputs={6}
                        renderSeparator={<i className="px-[1%]"/>}
                        renderInput={(props: any) => <input {...props} />}
                        inputStyle={`border rounded-full min-w-[50px] min-h-[50px] my-6 ${
                            error ? 'border-w3b-red' : 'border-[#A5A7AC]'
                        }`}
                    />
                </div>

                {error && <p className="text-sm text-w3b-red font-bold -mt-4">{error}</p>}
                <button
                    onClick={handleOtp}
                    disabled={loading}
                    className="border border-[#A5A7AC] rounded-xl py-2 px-4 disabled:border-w3b-red/50 hover:bg-w3b-light-red"
                >
                    {loading ? (
                        <div className="flex gap-[5%] items-center justify-center ">
                            <TailSpin
                                height="auto"
                                width="2vw"
                                color="#ff0000"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="circles-with-bar-loading"
                            />
                            <p className="opacity-40">Verifying Otp...</p>
                        </div>
                    ) : (
                        'Verify'
                    )}
                </button>

                <button
                    onClick={() => {
                        closeModal(false);
                    }}
                    className="text-white bg-w3b-red  rounded-xl py-2 px-4  hover:bg-w3b-light-red hover:text-black"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default OtpModal;