import React, { useState, useEffect, useCallback } from "react";
import { Subject } from "subjecto";
import styled from "styled-components";
import config from "../../../config";
import store from "../../../store";
import supabase from "../../../services/supabase";
import { CourseItem, CourseManagerWrapper } from "./CoursesManagerItems";

const CoursesManager = () => {
  const courses = store.courses.hook();
  const [error, setError] = useState(null);

  useEffect(async () => {
    let { data: courses, error } = await supabase
      .from("courses")
      .select("*")
      .eq("organization_id", config.ORGANIZATION_ID);

    if (!error) {
      courses.forEach((course) => {
        if (!store.lessons[course.id])
          store.lessons[course.id] = new Subject<any>(null);
      });
      store.courses.next(courses);
    }
    if (error) setError(error);
  }, []);

  if (error) return <div>{error?.message}</div>;
  if (!courses) return <div>Loading...</div>;
  if (courses.length && courses.length === 0) return <div>No courses</div>;

  return (
    <CourseManagerWrapper>
      {courses.map((course) => {
        return <CourseItem key={course.id} data={course} />;
      })}
    </CourseManagerWrapper>
  );
};

export default CoursesManager;
