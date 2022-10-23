import * as cdk from 'aws-cdk-lib';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import { Construct } from 'constructs';
import {CodeBuildStep, CodePipeline, CodePipelineSource} 
from "aws-cdk-lib/pipelines";

export class Workshop1PipelineStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Creates a new CodeCommit repository called 'WorkshopRepo'
        const repo = new codecommit.Repository(this, 'Workshop1Repo', {
            repositoryName: "Workshop1Repo"
        });

        // The basic pipeline declaration. This sets the initial structure of our pipeline
        const pipeline = new CodePipeline(this, 'Pipeline', {
            pipelineName: 'Workshop1Pipeline',
            synth: new CodeBuildStep('SynthStep', {
                    input: CodePipelineSource.codeCommit(repo, 'main'),
                    installCommands: [
                        'npm install -g aws-cdk'
                    ],
                    commands: [
                        'npm ci',
                        'npm run build',
                        'npx cdk synth'
                    ]
                }
            )
        });
    }
}