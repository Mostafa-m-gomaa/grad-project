import { useContext, useEffect, useRef, useState } from "react";
import DashboardSlide from "../components/DashboardSlide";
import PostCard from "../components/PostCard";
import { AppContext, route } from "../App";
import { useNavigate } from "react-router-dom";

const Analytic = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesNumber, setPagesNumber] = useState(0);
  const [courseId, setCourseId] = useState("");
  const [courses, setCourses] = useState([]);
  const { setLoading } = useContext(AppContext);
  const contianer = useRef();
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(`${route}education/courses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setCourses(data.data);
        }
        if (data?.error?.error === 500) {
          setCourses([]);
          localStorage.clear();
          nav("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    setLoading(true);

    fetch(
      `${route}analytic/posts?sort=-createdAt&page=${currentPage}${
        courseId && `&shareTo=course&course=${courseId}`
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setPosts(data.data);
        } else {
          setPosts([]);
        }

        setPagesNumber(data.paginationResult.numberOfPages);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [courseId]);
  return (
    <div className="home-for-login">
      <DashboardSlide />
      <div className="cats m-6 ">
        <div className="wrapper" ref={contianer}>
          <div
            className="option"
            onClick={() => {
              setCurrentPage(1);
              setCourseId("");
            }}
          >
            <input className="input" type="radio" name="btn" value="All" />
            <div className="btn">
              <span className="span">All</span>
            </div>
          </div>
          {courses?.map((cat) => {
            return (
              <div
                className="option"
                key={cat._id}
                onClick={() => {
                  setCurrentPage(1);
                  setCourseId(cat._id);
                }}
              >
                <input
                  className="input"
                  type="radio"
                  name="btn"
                  value={cat.title}
                />
                <div className="btn">
                  <span className="span">{cat.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full max-w-[750px] mx-auto p-4  ">
        <div>
          {posts?.map((post) => {
            return <PostCard date={true} post={post} key={post._id} />;
          })}
          {pagesNumber > 1 && (
            <div className="bg-blackGold p-4 rounded-xl">
              <h2 className="text-xl text-center">هناك {pagesNumber} صفحات</h2>
              <div className="flex w-fit items-center justify-center border mx-auto border-lightGray rounded-xl">
                <button
                  className={`rounded-r-xl p-3 text-center disabled:cursor-not-allowed w-[90px] bg-gold text-dark disabled:bg-gray`}
                  disabled={pagesNumber <= currentPage}
                  onClick={() => {
                    setCurrentPage((prev) => prev + 1);
                    contianer.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  التالي
                </button>
                <div className=" p-3 text-center w-[90px]">{currentPage}</div>
                <button
                  className={`rounded-l-xl p-3 text-center disabled:cursor-not-allowed w-[90px] bg-gold text-dark disabled:bg-gray`}
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage((prev) => prev - 1);
                    contianer.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  السابق
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytic;
