import { Clock, Users, BookOpen, CheckCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-serif text-gray-800">Welcome to Your Books Library</h2>
        <p className="text-gray-600 mt-2">Track your reading progress and stay organized with your library</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-rose-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Books Read</p>
              <p className="text-2xl font-semibold text-gray-800">24</p>
            </div>
            <BookOpen className="text-rose-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-rose-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Currently Reading</p>
              <p className="text-2xl font-semibold text-gray-800">3</p>
            </div>
            <Clock className="text-rose-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-rose-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Authors Followed</p>
              <p className="text-2xl font-semibold text-gray-800">12</p>
            </div>
            <Users className="text-rose-500" size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-rose-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Tasks Complete</p>
              <p className="text-2xl font-semibold text-gray-800">15/20</p>
            </div>
            <CheckCircle className="text-rose-500" size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-rose-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Reads</h3>
          <div className="space-y-4">
            {[
              { task: "Read '1984'", date: "Oct 10" },
              { task: "Start 'Brave New World'", date: "Oct 15" },
              { task: "Finish 'The Great Gatsby'", date: "Oct 20" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">{item.task}</span>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-rose-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Updates</h3>
          <div className="space-y-4">
            {[
              { update: "Finished 'To Kill a Mockingbird'", time: "2 days ago" },
              { update: "Added 'The Catcher in the Rye' to library", time: "5 days ago" },
              { update: "Reviewed 'Moby Dick'", time: "1 week ago" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">{item.update}</span>
                <span className="text-sm text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
