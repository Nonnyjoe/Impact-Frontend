import Modal from '@/components/Admin/RequestModal';
import { TTableRow } from '@/components/Admin/TableRow';
import useUser from '@/lib/useUser';
import { CohortData } from '@/pages/admin/cohorts';
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { TailSpin } from 'react-loader-spinner';

const CohortAction: React.FC<{ data: CohortData | TTableRow }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { postFormData } = useUser({ access: 'Admin' });

  const handleCSVRead = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleCSVUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('csvFile', file);
    try {
      const res = await postFormData('user/upload-preboarders', formData);
      if (!res.status) {
        throw Error(res.message);
        return;
      }
      setIsOpen(false);
      setFile(null);
      setLoading(false);
      toast.success(res.message);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            <AiOutlineEllipsis className="text-rmd" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-[2%] w-[12vw] z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <Menu.Item
              as="button"
              className="p-[3%] text-[0.8vw] w-full text-center hover:bg-w3b-light-red"
              onClick={() => setIsOpen(true)}
            >
              <>Add Students</>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Upload CSV'}>
        <div className="flex flex-col gap-y-[1vh]">
          <div>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => handleCSVRead(e)}
              accept={'text/csv'}
            />
          </div>

          <button
            className=" bg-w3b-red disabled:bg-w3b-light-red/60 text-white py-[2%] p-[3%] rounded-[0.3vw] hover:bg-w3b-red/60 flex gap-x-[1vw] justify-center"
            disabled={!file}
            onClick={handleCSVUpload}
          >
            {loading ? (
              <>
                <TailSpin
                  height="auto"
                  width="20px"
                  color="#fff"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="circles-with-bar-loading"
                />
                <p className="">Uploading...</p>
              </>
            ) : (
              <>Upload</>
            )}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CohortAction;
