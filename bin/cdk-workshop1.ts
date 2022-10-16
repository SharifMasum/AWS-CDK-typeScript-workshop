#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshop1Stack } from '../lib/cdk-workshop1-stack';

const app = new cdk.App();
new CdkWorkshop1Stack(app, 'CdkWorkshop1Stack');
