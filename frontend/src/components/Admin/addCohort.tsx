import { useState } from 'react';
import toast from 'react-hot-toast';
import { TailSpin } from 'react-loader-spinner';

const AddCohort = ({
  postApi,
  done = () => {},
}: {
  // eslint-disable-next-line no-unused-vars
  postApi: (path: string, body: any, method?: string) => Promise<any>;
  done?: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    numberOfStudents: 0,
  });
  const handleAddCohort = async () => {
    setLoading(true);
    try {
      const res = await postApi(`cohort`, formData, 'post');
      if (res.status) {
        toast.success('Cohort added successfully');
        setLoading(false);
        setFormData({
          name: '',
          startDate: '',
          endDate: '',
          numberOfStudents: 0,
        });
        done();
      } else {
        toast.error(`Error adding cohort: ${res.message}`);
        setLoading(false);
      }
    } catch (error) {
      console.error({ error });
      toast.error('Error adding cohort');
    }
  };
  return (
    <div className="grid gap-4">
      <div className="form-item">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="input"
          id="name"
          placeholder="Enter cohort name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="form-item">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          className="input"
          id="startDate"
          placeholder="Enter cohort start date"
          value={formData.startDate}
          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          required
        />
      </div>

      <div className="form-item">
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          className="input"
          id="endDate"
          value={formData.endDate}
          onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
          placeholder="Enter cohort end date"
          required
        />
      </div>

      <div className="form-item">
        <label htmlFor="name">Number of Students</label>
        <input
          type="number"
          className="input"
          id="name"
          placeholder="Enter number of students"
          value={formData.numberOfStudents}
          onChange={(e) =>
            setFormData({ ...formData, numberOfStudents: parseInt(e.target.value, 10) })
          }
          required
        />
      </div>

      <button
        onClick={handleAddCohort}
        className="bg-w3b-red text-white rounded-lg py-2 px-8 hover:bg-[#7a1515] disabled:bg-w3b-light-red font-bold disabled:text-w3b-red"
        disabled={loading}
      >
        {loading ? (
          <div className="flex gap-8 items-center justify-center">
            <TailSpin
              height="auto"
              width="20px"
              color="#ff0000"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="circles-with-bar-loading"
            />
            <p className="opacity-40">Adding...</p>
          </div>
        ) : (
          <>Add</>
        )}
      </button>
    </div>
  );
};

export default AddCohort;
