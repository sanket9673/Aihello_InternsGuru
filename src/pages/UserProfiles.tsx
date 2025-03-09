import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserMetaCard from "../components/UserProfile/UserMetaCard";
import UserInfoCard from "../components/UserProfile/UserInfoCard";
import UserAddressCard from "../components/UserProfile/UserAddressCard";
import PageMeta from "../components/common/PageMeta";
import MonthlyProfileTarget from "../components/ecommerce/MonthlyProfileTarget";
import ProfileMetrics from "../components/ecommerce/ProfileMetrics";
import ProfileChart from "../components/ecommerce/ProfileChart";

export default function UserProfiles() {
  return (
    <>
      <PageMeta
        title="React.js Dashboard | Ganesh Aihello"
        description="React.js Dashboard | Ganesh Aihello"
      />
      <PageBreadcrumb pageTitle="Profile" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 mt-5">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <ProfileMetrics />
          <ProfileChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyProfileTarget />
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
          <UserAddressCard />
        </div>
      </div>
    </>
  );
}
