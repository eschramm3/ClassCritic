package org.ratemycourse.GetCourses;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
<<<<<<< HEAD

//import java.util.List;
=======
import java.util.Optional;
import java.util.Set;
>>>>>>> a85aa05af99cf95759a387e9ffb21d8500e2565b

import org.ratemycourse.GetCourses.Course;

//This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
//CRUD refers Create, Read, Update, Delete
@Repository
public interface CourseRepository extends JpaRepository<Course, String> {
	
<<<<<<< HEAD
<<<<<<< HEAD
	List<Course> findByDept(@Param("dept") String dept);
	List<Course> findBySchool(@Param("school") String school);
	List<Course> findBySchoolAndDept(@Param("school") String school, @Param("dept") String dept);
	
//	List<Course> findByName(String name);
//	List<Course> findBySchool(String school);
//	List<Course> findBySchoolAndDept(String school, String dept);
//	List<Course> findBySchoolAndDeptAndNumber(String school, String dept, String number);
//	List<Course> findByAttrs(String... attrs);
=======
	List<Course> findByNameContainingIgnoreCaseOrderByParent_AvgScoreDesc(@Param(value="name") String name);
	List<Course> findBySchoolIgnoreCaseOrderByParent_AvgScoreDesc(@Param(value="school") String school);
	List<Course> findBySchoolAndDeptAllIgnoreCaseOrderByParent_AvgScoreDesc(@Param(value="school") String school, @Param(value="dept") String dept);
=======
//	List<Course> findByNameContainingIgnoreCaseOrderByParent_AvgScoreDesc(@Param(value="name") String name);
//	List<Course> findBySchoolIgnoreCaseOrderByParent_AvgScoreDesc(@Param(value="school") String school);
//	List<Course> findBySchoolAndDeptAllIgnoreCaseOrderByParent_AvgScoreDesc(@Param(value="school") String school, @Param(value="dept") String dept);
>>>>>>> 9d9871777a0b73f1cf923306118d5e3d7a409576
	Optional<Course> findBySchoolAndDeptAndNumberAllIgnoreCase(@Param(value="school") String school, @Param(value="dept") String dept, @Param(value="number") String number);
	Optional<Course> findBySchoolAndDeptAndNameContainingAllIgnoreCase(@Param(value="school") String school, @Param(value="dept") String dept, @Param(value="name") String name);
//	List<Course> findDistinctCourseByAttrsInAllIgnoreCaseOrderByParent_AvgScoreDesc(@Param(value="attrs") Set<String> attrs);
//	List<Course> findDistinctCourseBySchoolAndAttrsInAllIgnoreCaseOrderByParent_AvgScoreDesc(@Param(value="school") String school, @Param(value="attrs") Set<String> attrs);
//	List<Course> findDistinctCourseBySchoolAndDeptAndAttrsInAllIgnoreCaseOrderByParent_AvgScoreDesc(@Param(value="school") String school, @Param(value="dept") String dept, @Param(value="attrs") Set<String> attrs);
//	List<Course> findByDescriptionContainingIgnoreCaseOrderByParent_AvgScoreDesc(@Param(value="description") String description);
//	List<Course> findByNumberContainingIgnoreCaseOrderByParent_AvgScoreDesc(@Param(value="number") String num);
	
	Page<Course> findByNameContainingIgnoreCaseOrderByParent_AvgScoreDesc(String name, Pageable page);
	Page<Course> findBySchoolIgnoreCaseOrderByParent_AvgScoreDesc(String school, Pageable page);
	Page<Course> findBySchoolAndDeptAllIgnoreCaseOrderByParent_AvgScoreDesc(String school, String dept, Pageable page);
	Page<Course> findDistinctCourseByAttrsInIgnoreCase(Set<String> attrs, Pageable page);
	Page<Course> findDistinctCourseBySchoolAndAttrsInAllIgnoreCase(String school, Set<String> attrs, Pageable page);
	Page<Course> findDistinctCourseBySchoolAndDeptAndAttrsInAllIgnoreCase(String school, String dept, Set<String> attrs, Pageable page);
	Page<Course> findByDescriptionContainingIgnoreCaseOrderByParent_AvgScoreDesc(String description, Pageable page);
	Page<Course> findByNumberContainingIgnoreCaseOrderByParent_AvgScoreDesc(String num, Pageable page);
	Optional<Course> findByIdIgnoreCase(String id);
>>>>>>> a85aa05af99cf95759a387e9ffb21d8500e2565b
	
}
