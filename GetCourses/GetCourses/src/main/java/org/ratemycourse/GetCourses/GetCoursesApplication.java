package org.ratemycourse.GetCourses;

import java.io.DataOutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;

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

	public static void main(String[] args) throws IOException {
		SpringApplication.run(GetCoursesApplication.class, args);
	}
}
