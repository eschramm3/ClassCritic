<<<<<<< HEAD
package org.ratemycourse.GetCourses;

import org.springframework.data.repository.CrudRepository;

//This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
//CRUD refers Create, Read, Update, Delete

public interface CourseRepository extends CrudRepository<Course, Long> {
	
}
=======
package org.ratemycourse.GetCourses;

import org.springframework.data.repository.CrudRepository;
import org.ratemycourse.GetCourses.Course;

//This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
//CRUD refers Create, Read, Update, Delete

public interface CourseRepository extends CrudRepository<Course, Long> {
	
}
>>>>>>> 981848d5e7b6c135fcb009401d7139a008f84cce
