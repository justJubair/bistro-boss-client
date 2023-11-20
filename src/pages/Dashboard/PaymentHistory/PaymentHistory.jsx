import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: [user?.email, "paymentHistory"],
    queryFn: async () => {
      const res = await axiosSecure(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle heading="payment history" subHeading="At a Glance" />
      <h2 className="font-semibold my-7">Total Payments: {payments?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => (
              <tr key={payment._id}>
                <th>{idx + 1}</th>
                <td>{payment.email}</td>
                <td>{payment.transactionId}</td>
                <td>${payment.price}</td>
                <td>{payment.status}</td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PaymentHistory;
