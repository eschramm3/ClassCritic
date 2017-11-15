package org.ratemycourse.GetCourses;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UniqueCourseRepository extends JpaRepository<UniqueCourse, Long>{

}
