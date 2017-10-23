package org.ratemycourse.GetCourses;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({"org.ratemycourse.GetCourses*"})
@EntityScan("org.ratemycourse.GetCourses*")
@EnableJpaRepositories("org.ratemycourse.GetCourses*")
public class GetCoursesApplication {

	public static void main(String[] args) {
		SpringApplication.run(GetCoursesApplication.class, args);
	}
}
