"use client"

import React from 'react';
import config from "@/sanity.config";
// eslint-disable-next-line import/no-extraneous-dependencies
import { NextStudio } from "next-sanity/studio";

function AdminPage() {
  return <NextStudio config={config} />
}

export default AdminPage