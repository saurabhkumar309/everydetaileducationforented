import Choose from "@/app/(users)/about/why choose/page";
import MostPopularCourses from "@/app/(users)/about/course/page";
import BestFacilites from "@/app/(users)/about/Facilites/page";
import StudentSay from "@/app/(users)/about/Student/page";
import '@/app/globals.css';
export default function aboutLayout({ children }) {
  return (<>
  
      <h1>About Layout</h1>
        <h1>About Layout</h1>
        {children}
        <Choose />
       <MostPopularCourses />
       <BestFacilites />
       <StudentSay />
 
    </>
  );
}
