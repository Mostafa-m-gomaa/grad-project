import { useContext, useEffect, useState } from "react";

import { AppContext, route } from "../../App";
import DashboardSlide from "../../components/DashboardSlide";
import { Link, useParams } from "react-router-dom";

const Courses = () => {
  const { setLoading } = useContext(AppContext);
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem("token");
  const catId = useParams().catId;

  useEffect(() => {
    setLoading(true);

    fetch(`${route}education/courses/relatedCourses/${catId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <DashboardSlide />
      {!courses?.length && (
        <div className="text-lightGray text-4xl my-20 text-center w-full">
          Can not find any courses in this category
        </div>
      )}
      <div className="border border-gray rounded-2xl bg-blackGold p-2 md:p-6  m-2  md:m-6 gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid">
        {courses?.map((course) => {
          return (
            <Link
              to={`course/${course._id}`}
              className="col-span-1 p-2 border border-gray rounded-2xl"
              key={course._id}
            >
              <div className="category" key={course._id}>
                <h2 className="text-center p-2 sm:text-lg md:text-xl lg:text-2xl">
                  {course.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
