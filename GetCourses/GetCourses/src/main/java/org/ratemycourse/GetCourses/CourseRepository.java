package org.ratemycourse.GetCourses;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

//import java.util.List;

import org.ratemycourse.GetCourses.Course;

//This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
//CRUD refers Create, Read, Update, Delete
@Repository
public interface CourseRepository extends PagingAndSortingRepository<Course, String> {
	
//	List<Course> findByName(String name);
//	List<Course> findBySchool(String school);
//	List<Course> findBySchoolAndDept(String school, String dept);
//	List<Course> findBySchoolAndDeptAndNumber(String school, String dept, String number);
//	List<Course> findByAttrs(String... attrs);
	
}
