package org.ratemycourse.GetCourses;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity // This tells Hibernate to make a table out of this class
public class Course {

	@ManyToOne(fetch = FetchType.LAZY)
	@NotFound(action = NotFoundAction.IGNORE)
	@JsonManagedReference
	private UniqueCourse parent = new UniqueCourse();
	private long commonVal;
	@Id
	private String id;
	private String school;
	private String dept;
	private String num;
	private String name;
	private String description;
	@ElementCollection(targetClass=String.class)
	private Set<String> attrs;
	private boolean isMain;
	
	public Course() {}

	public Course(UniqueCourse parent, long commonVal, String school, String dept, String number, String name, 
			String description, Set<String> attrs, boolean isMain) {
		this.parent = parent;
		this.commonVal = commonVal;
		this.id = dept + "-" + number;
		this.school = school;
		this.dept = dept;
		this.num = number;
		this.name = name;
		this.description = description;
		this.attrs = new HashSet<>(attrs);
		this.isMain = isMain;
	}
	
	public String getId() {
		return this.id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public long getCommonVal() {
		return this.commonVal;
	}
	public void setCommonVal(long val) {
		this.commonVal = val;
	}
	public String getSchool() {
		return this.school;
	}
	public void setSchool(String school) {
		if (this.school == null)
			this.school = school;
		else throw new UnsupportedOperationException("You cannot change the school once it has been set");
	}
	public String getDept() {
		return this.dept;
	}
	public void setDept(String dept) {
		if (this.dept == null)
			this.dept = dept;
		else throw new UnsupportedOperationException("You cannot change the department once it has been set");
	}
	public String getNum() {
		return this.num;
	}
	public void setNum(String number) {
		if (this.num == null)
			this.num = number;
		else throw new UnsupportedOperationException("You cannot change the course number once it has been set");
	}
	public String getName() {
		return this.name;
	}
	public void setName(String name) {
		if (this.name == null)
		this.name = name;
		else throw new UnsupportedOperationException("You cannot change the name once it has been set");
	}
	public String getDescription() {
		return this.description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Set<String> getAttrs() {
		return this.attrs;
	}
	public void setAttrs(Set<String> attrs) {
		this.attrs = new HashSet<>(attrs);
	}
	public boolean isMain() {
		return this.isMain;
	}
	public void setMain(boolean isMain) {
		this.isMain = isMain;
	}
	public UniqueCourse getParent() {
		return this.parent;
	}
	public void setParent(UniqueCourse parent) {
		this.parent = parent;
	}
}
