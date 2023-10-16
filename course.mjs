import { Major } from "./major.mjs";

export class Course extends Major {

    constructor(collegeName, majorName, courseId, courseName, numberOfHours, type, prerequisites) {
        super(collegeName);
        super(majorName);
        this.courseId = courseId;
        this.courseName = courseName;
        this.numberOfHours = numberOfHours;
        this.type = type;
        this.prerequisites = prerequisites;
        this.courses = [];
    }
}