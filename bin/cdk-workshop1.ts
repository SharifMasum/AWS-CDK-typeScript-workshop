#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Workshop1PipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();
new Workshop1PipelineStack(app, 'CdkWorkshop1PipelineStack');
