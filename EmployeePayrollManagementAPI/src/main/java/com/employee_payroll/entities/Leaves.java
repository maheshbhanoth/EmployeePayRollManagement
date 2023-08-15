package com.employee_payroll.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Leaves {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;
	private String leaveType;
	private LocalDate startDate;
	private LocalDate endDate;
	private String reason;

	@ManyToOne
	@JoinColumn(name="employee_id")
	private Employee employee;
	
	public String getLeaveType() {
		return leaveType;
	}

	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public int getId() {
		return id;
	}

	public Leaves(String leaveType, LocalDate startDate, LocalDate endDate, String reason, Employee employee) {
		super();
		this.leaveType = leaveType;
		this.startDate = startDate;
		this.endDate = endDate;
		this.reason = reason;
		this.employee = employee;
	}

	@Override
	public String toString() {
		return "Leaves [id=" + id + ",leaveType=" + leaveType + ", startDate=" + startDate + ", endDate=" + endDate + ", reason=" + reason
				+ ", employee=" + employee + "]";
	}
	
	
	public Leaves() {
		
	}
	
}