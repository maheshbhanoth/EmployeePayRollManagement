package com.employee_payroll.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Schedule_work {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String is_work_assigned;
	
	private String work_description;
	
	private LocalDate date_assigned;

	@ManyToOne
	@JoinColumn(name="employee_id")
	private Employee employee;
	
	public Schedule_work() {
		super();
	}

	public Schedule_work(String is_work_assigned, String work_description, LocalDate dateAdded, Employee employee) {
		super();
		this.is_work_assigned = is_work_assigned;
		this.work_description = work_description;
		this.date_assigned = dateAdded;
		this.employee = employee;
	}

	public int getId() {
		return id;
	}
	
	public String getIs_work_assigned() {
		return is_work_assigned;
	}

	public void setIs_work_assigned(String is_work_assigned) {
		this.is_work_assigned = is_work_assigned;
	}

	public String getWork_description() {
		return work_description;
	}

	public void setWork_description(String work_description) {
		this.work_description = work_description;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public LocalDate getDate_assigned() {
		return date_assigned;
	}

	public void setDate_assigned(LocalDate dateAdded) {
		this.date_assigned = dateAdded;
	}
	
}
