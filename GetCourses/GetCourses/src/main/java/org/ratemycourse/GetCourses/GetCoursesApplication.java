<<<<<<< HEAD
package org.ratemycourse.GetCourses;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GetCoursesApplication {

	public static void main(String[] args) {
		SpringApplication.run(GetCoursesApplication.class, args);
	}
}
=======
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
>>>>>>> f19a30560ad9eaabc4481069b7c94ae5b4799c82
