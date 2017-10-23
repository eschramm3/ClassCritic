<<<<<<< HEAD
package org.ratemycourse.GetCourses;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.ratemycourse.GetCourses.Rating;

@Entity // This tells Hibernate to make a table out of this class
public class Course {

	@Id
	private long id;
	private String key;
	private String school;
	private String dept;
	private String number;
	private String name;
	private String description;
	private List<String> attrs;
	private List<Rating> ratings;
	private int sumOfScores;
	private int numScores;
	private double avgScore;

	public int getSumOfScores() {
		return sumOfScores;
	}
	public int getNumScores() {
		return numScores;
	}
	public double getAvgScore() {
		return avgScore;
	}
	public List<Rating> getRatings() {
		return ratings;
	}
	public void addRating(Rating r) {
		this.ratings.add(r);
		++this.numScores;
		this.sumOfScores += r.getScore();
		this.avgScore = this.sumOfScores / (double) this.numScores;
	}
	public void deleteRating(Rating r) {
		// TODO
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		if (this.id == 0)
			this.id = id;
		else throw new UnsupportedOperationException("You cannot change the id once it has been set");
	}
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		if (this.key.equals(""))
			this.key = key;
		else throw new UnsupportedOperationException("You cannot change the course key once it has been set");
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		if (this.school == "")
			this.school = school;
		else throw new UnsupportedOperationException("You cannot change the school once it has been set");
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		if (this.dept.equals(""))
			this.dept = dept;
		else throw new UnsupportedOperationException("You cannot change the department once it has been set");
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		if (this.number.equals(""))
			this.number = number;
		else throw new UnsupportedOperationException("You cannot change the course number once it has been set");
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		if (this.name.equals(""))
		this.name = name;
		else throw new UnsupportedOperationException("You cannot change the name once it has been set");
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<String> getAttrs() {
		return attrs;
	}
	public void setAttrs(String[] attrs) {
		this.attrs = new ArrayList<>(attrs.length);
		for (String a : attrs) {
			this.attrs.add(a);
		}
	}

}

=======
package org.ratemycourse.GetCourses;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity // This tells Hibernate to make a table out of this class
public class Course {

	@Id
	private long id;
	private String key;
	private String school;
	private String dept;
	private String number;
	private String name;
	private String description;
	@ElementCollection(targetClass=String.class)
	private Set<String> attrs;
	@OneToMany(targetEntity=Rating.class, mappedBy="course", fetch=FetchType.EAGER)
	private List<Rating> ratings;
	private int sumOfScores;
	private int numScores;
	private double avgScore;
	
	public Course() {}

	public Course(long id, String key, String school, String dept, String number, String name, String description,
			Set<String> attrs) {
		this.id = id;
		this.key = key;
		this.school = school;
		this.dept = dept;
		this.number = number;
		this.name = name;
		this.description = description;
		this.attrs = attrs;
		this.ratings = new ArrayList<>();
		this.sumOfScores = 0;
		this.numScores = 0;
		this.avgScore = 0;
	}
	public int getSumOfScores() {
		return sumOfScores;
	}
	public int getNumScores() {
		return numScores;
	}
	public double getAvgScore() {
		return avgScore;
	}
	public List<Rating> getRatings() {
		return ratings;
	}
	public void addRating(Rating r) {
		this.ratings.add(r);
		++this.numScores;
		this.sumOfScores += r.getScore();
		this.avgScore = this.sumOfScores / (double) this.numScores;
	}
	public void deleteRating(Rating r) {
		// TODO
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		if (this.id == 0)
			this.id = id;
		else throw new UnsupportedOperationException("You cannot change the id once it has been set");
	}
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		if (this.key.equals(""))
			this.key = key;
		else throw new UnsupportedOperationException("You cannot change the course key once it has been set");
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		if (this.school == "")
			this.school = school;
		else throw new UnsupportedOperationException("You cannot change the school once it has been set");
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		if (this.dept.equals(""))
			this.dept = dept;
		else throw new UnsupportedOperationException("You cannot change the department once it has been set");
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		if (this.number.equals(""))
			this.number = number;
		else throw new UnsupportedOperationException("You cannot change the course number once it has been set");
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		if (this.name.equals(""))
		this.name = name;
		else throw new UnsupportedOperationException("You cannot change the name once it has been set");
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Set<String> getAttrs() {
		return attrs;
	}
	public void setAttrs(String[] attrs) {
		this.attrs = new HashSet<>(attrs.length);
		for (String a : attrs) {
			this.attrs.add(a);
		}
	}

}
>>>>>>> ecaaafb3267ecf003529e119b2349fa04b59b38d
