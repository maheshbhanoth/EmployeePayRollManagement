package com.employee_payroll.DTO;

import java.time.LocalDate;

public class ScheduleWorkDTO {

	private int id;
    private LocalDate date_assigned;
    private String is_work_assigned;
    private String work_description;
    private int employee_id;
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public LocalDate getDate_assigned() {
		return date_assigned;
	}
	public void setDate_assigned(LocalDate date_assigned) {
		this.date_assigned = date_assigned;
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
	public int getEmployee_id() {
		return employee_id;
	}
	public void setEmployee_id(int i) {
		this.employee_id = i;
	}
    
    
    
}
