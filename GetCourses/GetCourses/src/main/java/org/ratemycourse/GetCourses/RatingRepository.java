package org.ratemycourse.GetCourses;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
			
//		List<Rating> findByUniqueCourse(@Param(value="course") UniqueCourse uc);
//		List<Rating> findBySemTaken(@Param(value="semTaken") String semTaken);
//		List<Rating> findByUserId(@Param(value="userId") Long userId);
		
		Page<Rating> findByUserId(String userId, Pageable page);
		Page<Rating> findByUserIdOrderBySemTakenAsc(Long userId, Pageable page);
		Page<Rating> findByUniqueCourse(UniqueCourse uc, Pageable page);
		Page<Rating> findByUniqueCourseOrderBySemTakenAsc(UniqueCourse uc, Pageable page);
		
}
