import {
  MdFormatSize,
  MdTextFormat,
  MdOutlineImage,
  MdInsertEmoticon,
  MdHorizontalRule,
  MdSwapVert,
  MdStarBorder,
  MdOutlineCheckBoxOutlineBlank,
  MdEditAttributes,
  MdWarning,
  MdNotes,
  MdInput,
  MdAddBox,
  MdSearch,
  MdPassword,
  MdSmartphone,
  MdToggleOff,
  MdCheckBox,
  MdRadioButtonChecked,
  MdGridView,
  MdTableRows,
  MdSplitscreen,
  MdWebAsset,
  MdExpand,
  MdTableChart,
  MdMoreHoriz,
  MdLink,
  MdMenu,
  MdTab,
  MdTouchApp,
  MdUnfoldMore,
  MdDisabledVisible,
  MdRefresh,
  MdTune,
  MdSystemUpdateAlt,
  MdCheckCircle
} from 'react-icons/md'

export interface ComponentNavItem {
  href: string
  label: string
  body: string
  tertiary?: boolean
}

const sortByLabel = (a: ComponentNavItem, b: ComponentNavItem) =>
  a.label < b.label ? -1 : a.label > b.label ? 1 : 0

export const sagemakerComponents: ComponentNavItem[] = [
  {
    href: '/sagemaker/pipeline',
    label: 'SageMaker Pipeline',
    body: 'Build a simple ML pipeline with sagemaker pipeline and codepipeline',
    platforms: ['react']
  }
].sort(sortByLabel)

export const amplifyComponents: ComponentNavItem[] = [
  {
    href: '/amplify/aws-sdk-js-browser',
    label: 'Upload to S3 from Browser using AWS-SDK-JS',
    body: 'Upload to S3 from Browser using AWS-SDK-JS',
    platforms: ['react']
  }
].sort(sortByLabel)

export const cdkComponents: ComponentNavItem[] = [
  {
    href: '/cdk/custom-resource',
    label: 'Custom Resource',
    body: `Create a custom resource`,
    platforms: ['react']
  },
  {
    href: '/cdk/assume-role',
    label: 'Assume Role',
    body: `Hello assume role with CDK`,
    platforms: ['react']
  },
  {
    href: '/cdk/ssm',
    label: 'System Manager Tunnel',
    body: `Vscode remote connect to a private EC2`,
    platforms: ['react']
  },
  {
    href: '/cdk/lambda-api',
    label: 'Lambda Based API',
    body: `Build a CI/CD pipepline to deploy lambda based API, event triggers, SQS queue.`,
    platforms: ['react']
  },
  {
    href: '/cdk/s3-lambda',
    label: 'Lambda Trigger S3',
    body: `Build a CI/CD pipepline to deploy lambda based API, event triggers, SQS queue.`,
    platforms: ['react']
  },
  {
    href: '/cdk/sqs-lambda',
    label: 'SQS Trigger Lambda',
    body: `Build a CI/CD pipepline to deploy lambda based API, event triggers, SQS queue.`,
    platforms: ['react']
  },
  {
    href: '/cdk/ecs-fargate',
    label: 'ECS Fargate',
    body: `Experiment ECS Fargate with CDK`,
    platforms: ['react']
  },
  {
    href: '/cdk/cicd-devicefarm',
    label: 'CI/CD Device Farm',
    body: `Experiment ECS Fargate with CDK`,
    platforms: ['react']
  },
  {
    href: '/cdk/amplify-iot',
    label: 'Little Amplify IoT',
    body: `Build a sample IoT with CDK and Amplify`,
    platforms: ['react']
  },
  {
    href: '/cdk/lambda-graviton-x86',
    label: 'Lambda Graviton',
    body: `Benchmark performance between Lambda Graviton and x86`,
    platforms: ['react']
  },
  {
    href: '/cdk/cicd-ecr-ssm-tag',
    label: 'CI/CD ECR SSM Tag',
    body: `CI/CD Pipeline for Lambda with ECR and SSM for updating tag`,
    platforms: ['react']
  },
  {
    href: '/cdk/cicd-cross-account',
    label: 'CI/CD Cross Account',
    body: `CI/CD cross acount deploy`,
    platforms: ['react']
  },
  {
    href: '/cdk/dynamodb-stream-lambda',
    label: 'DyanmoDB Stream',
    body: `DynamoDB stream trigger lambda`,
    platforms: ['react']
  },
  {
    href: '/cdk/dynamodb-index',
    label: 'DynamoDB Index',
    body: `DynamoDB global secondary index`,
    platforms: ['react']
  },
  {
    href: '/cdk/cloudfront-s3',
    label: 'CloudFront S3',
    body: `CloudFront S3 host static web`,
    platforms: ['react']
  },
  {
    href: '/cdk/waf-cloudfront',
    label: 'WAF and CloudFront',
    body: `WAF and CloudFront defense your page`,
    platforms: ['react']
  },
  {
    href: '/cdk/route-53',
    label: 'Route 53',
    body: `Getting started with route 53`,
    platforms: ['react']
  },
  {
    href: '/cdk/aurora',
    label: 'Aurora',
    body: `Highly availability with ALB, ASG, and Aurora`,
    platforms: ['react']
  },
  {
    href: '/cdk/cloudfront-waf',
    label: 'CloudFront And Waf',
    body: ' Denfense CloudFront Static Web',
    platforms: ['react']
  },
  {
    href: '/cdk/api-gateway-lambda',
    label: 'API Gateway and Lambda',
    body: 'API Gateway and Lambda Integration',
    platforms: ['react']
  },
  {
    href: '/cdk/dax-dynamodb',
    label: 'DAX DynamoDB',
    body: 'DAX DynamoDB',
    platforms: ['react']
  },
  {
    href: '/cdk/elasticache-redis',
    label: 'ElastiCache for Redis',
    body: 'ElastiCache for Redis',
    platforms: ['react']
  },
  {
    href: '/cdk/microsoft-sql-to-rds-sql',
    label: 'Microsoft SQL to RDS SQL',
    body: 'Microsoft SQL to RDS SQL',
    platforms: ['react']
  },
  {
    href: '/cdk/transit-gateway-peering',
    label: 'Transit Gateway Peering',
    body: 'Transit Gateway Peering',
    platforms: ['react']
  },
  {
    href: '/cdk/transit-gateway-crouter',
    label: 'Transit Gateway Central Router',
    body: 'Transit Gateway Central Router',
    platforms: ['react']
  },
  {
    href: '/cdk/transit-gateway-simualted-on-prem',
    label: 'Transit Gateway and Simulated On-Prem',
    body: 'Transit Gateway and Simulated On-Prem',
    platforms: ['react']
  },
  {
    href: '/cdk/redis-dynamodb',
    label: 'Elastic Cache Redis and DynamoDB',
    body: 'Elastic Cache Redis and DynamoDB',
    platforms: ['react']
  },
  {
    href: '/cdk/microsoft-sql-aurora-migration',
    label: 'Microsoft SQL to Aurora MySQL Migration',
    body: 'Microsoft SQL to Aurora MySQL Migration',
    platforms: ['react']
  },
  {
    href: '/cdk/hello-ecs-flask',
    label: 'Hello AWS ECS with a FLask Web App',
    body: 'Hello AWS ECS with a Flask Web App',
    platforms: ['react']
  },
  {
    href: '/cdk/cicd-integration-test',
    label: 'CI/CD Pipeline with Integration Test',
    body: 'CI/CD Pipeline with Integration Test',
    platforms: ['react']
  },
  {
    href: '/cdk/apigw-auth-cognito',
    label: 'Api Gateway Auth with Cogntio JWT and Lambda',
    body: 'Api Gateway Auth with Cogntio JWT and Lambda',
    platforms: ['react']
  },
  {
    href: '/cdk/eventbridge-lambda',
    label: 'EventBridge with Lambda Producer and Consumer ',
    body: 'EventBridge with Lambda Producer and Consumer ',
    platforms: ['react']
  },
  {
    href: '/cdk/stepfunctions-getting-started',
    label: 'Getting Started with Stepfunctions',
    body: 'Getting Started with Stepfunctions',
    platforms: ['react']
  }
].sort(sortByLabel)

export const baseComponents: ComponentNavItem[] = [
  {
    href: '/components/view',
    label: 'View',
    body: `View is the foundational component for Amplify UI primitives. While View renders a <div> by default, it can render any HTML element and supports styling via props.`,
    platforms: ['react'],
    icon: MdOutlineCheckBoxOutlineBlank
  },
  {
    href: '/components/text',
    label: 'Text',
    body: `The Text primitive is used to display simple strings of text in an interface.`,
    platforms: ['react'],
    icon: MdTextFormat
  },
  {
    href: '/components/heading',
    label: 'Heading',
    body: `This is a separate primitive from Text for semantic purposes. The Heading primitive maps to an <h*> tag, and Text maps to a <p> tag.`,
    platforms: ['react'],
    icon: MdFormatSize
  },
  {
    href: '/components/icon',
    label: 'Icon',
    body: `The icon component displays simple vector graphics for use in other components like Buttons.`,
    platforms: ['react'],
    icon: MdInsertEmoticon
  },
  {
    href: '/components/image',
    label: 'Image',
    body: `The Image primitive can be used to display responsive images.`,
    platforms: ['react'],
    icon: MdOutlineImage
  },
  {
    href: '/components/divider',
    label: 'Divider',
    body: `A Divider creates separations in content. Dividers can help organize content and establish visual rhythm.`,
    platforms: ['react'],
    icon: MdHorizontalRule
  },
  {
    href: '/components/scrollview',
    label: 'ScrollView',
    body: `ScrollView is essentially a View that allows scrolling of its inner contents.`,
    platforms: ['react'],
    icon: MdSwapVert
  }
].sort(sortByLabel)

export const connectedComponents = [
  {
    href: '/connected-components/authenticator',
    label: 'Authenticator',
    body: 'The Authenticator component adds complete authentication flows to your application with minimal boilerplate.',
    platforms: ['react', 'vue', 'angular', 'flutter']
  },
  {
    href: '/connected-components/authenticator/configuration',
    label: 'Configuration',
    platforms: ['react', 'vue', 'angular', 'flutter'],
    tertiary: true
  },
  {
    href: '/connected-components/authenticator/customization',
    label: 'Customization',
    platforms: ['react', 'vue', 'angular', 'flutter'],
    tertiary: true
  },
  {
    href: '/connected-components/authenticator/headless',
    label: 'Headless Usage',
    platforms: ['react', 'vue', 'angular', 'flutter'],
    tertiary: true
  },
  {
    href: '/connected-components/geo',
    label: 'Geo',
    body: 'Amplify UI Geo provides UI components for maps and location search built on top of Amazon Location Service.',
    platforms: ['react']
  }
]

export const dataDisplayComponents = [
  {
    href: '/components/badge',
    label: 'Badge',
    body: `A Badge is a small visual element to denote a status or message about an item. A small, color-coded visual element that contains letters or numbers, that you can use to label, categorize, or organize items.`,
    platforms: ['react'],
    icon: MdCheckCircle
  },
  {
    href: '/components/rating',
    label: 'Rating',
    body: 'The Rating component displays a read-only star rating of a product or service.',
    platforms: ['react'],
    icon: MdStarBorder
  }
].sort(sortByLabel)

export const feedbackComponents: ComponentNavItem[] = [
  {
    href: '/components/alert',
    label: 'Alert',
    body: `An Alert displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Alerts are typically intended to be read out dynamically by a screen reader.`,
    platforms: ['react'],
    icon: MdWarning
  },
  {
    href: '/components/placeholder',
    label: 'Placeholder',
    body: `The Placeholder component is used to fill out the interface while content is loaded asynchronously.`,
    platforms: ['react'],
    icon: MdNotes
  },
  {
    href: '/components/loader',
    label: 'Loader',
    body: `Loaders provide a visual cue that an action is either processing or awaiting a result. They are used to help the customer understand the system is working to fulfill a request.`,
    platforms: ['react'],
    icon: MdRefresh
  }
].sort(sortByLabel)

export const inputComponents = [
  {
    href: '/components/textareafield',
    label: 'TextArea Field',
    body: `The TextAreaField form primitive can be used allow users to input multiline text content.`,
    platforms: ['react'],
    icon: MdSystemUpdateAlt
  },
  {
    href: '/components/textfield',
    label: 'Text Field',
    body: `The TextField form primitive can be used allow users to input text content.`,
    platforms: ['react'],
    icon: MdInput
  },
  {
    href: '/components/selectfield',
    label: 'Select Field',
    body: 'The SelectField primitive allows you to create a drop-down list.',
    platforms: ['react'],
    icon: MdUnfoldMore
  },
  {
    href: '/components/sliderfield',
    label: 'Slider Field',
    body: `Sliders allow users to quickly select a value within a range. They should be used when the upper and lower bounds to the range are invariable.`,
    platforms: ['react'],
    icon: MdTune
  },
  {
    href: '/components/stepperfield',
    label: 'Stepper Field',
    body: `A StepperField is a number input with buttons to increase or decrease the value.`,
    platforms: ['react'],
    icon: MdAddBox
  },
  {
    href: '/components/searchfield',
    label: 'Search Field',
    body: `SearchField accepts query text for search.`,
    platforms: ['react'],
    icon: MdSearch
  },
  {
    href: '/components/passwordfield',
    label: 'Password Field',
    body: `PasswordField allows users to input passwords, featuring full password manager support and an optional show/hide password button for user convenience - Amplify UI`,
    platforms: ['react'],
    icon: MdPassword
  },
  {
    href: '/components/phonenumberfield',
    label: 'Phone Number Field',
    body: `The PhoneNumberField form primitive allows users to input a phone number`,
    platforms: ['react'],
    icon: MdSmartphone
  },
  {
    href: '/components/switchfield',
    label: 'Switch Field',
    body: `The SwitchField form primitive is a toggleable input type with a checked (on) and unchecked (off) state.`,
    platforms: ['react'],
    icon: MdToggleOff
  },
  {
    href: '/components/radiogroupfield',
    label: 'Radio Group Field',
    body: `A RadioGroupField allows users to select a single option from a list of mutually exclusive options.`,
    platforms: ['react'],
    icon: MdRadioButtonChecked
  },
  {
    href: '/components/checkboxfield',
    label: 'Checkbox Field',
    body: `CheckboxField is used to mark an individual item as selected, or to select multiple items from a list of individual items.`,
    platforms: ['react'],
    icon: MdCheckBox
  },
  {
    href: '/components/togglebutton',
    label: 'Toggle Button',
    body: 'A toggle button represents an on/off state for some configuration, for example switching on/off bold text in a text editor.',
    platforms: ['react'],
    icon: MdEditAttributes
  },
  {
    href: '/components/button',
    label: 'Button',
    body: `The Button primitive is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.`,
    platforms: ['react'],
    icon: MdTouchApp
  }
].sort(sortByLabel)

export const layoutComponents = [
  {
    href: '/components/card',
    label: 'Card',
    body: `The Card component can be used to group related pieces of content.`,
    platforms: ['react'],
    icon: MdWebAsset
  },
  {
    href: '/components/collection',
    label: 'Collection',
    body: `A Collection wraps Flex and Grid components, and provides a way to display items in a collection from a data source.`,
    platforms: ['react'],
    icon: MdSplitscreen
  },
  {
    href: '/components/flex',
    label: 'Flex',
    body: `A layout container using Flexbox.`,
    platforms: ['react'],
    icon: MdTableRows
  },
  {
    href: '/components/grid',
    label: 'Grid',
    body: 'A layout container using CSS Grid',
    platforms: ['react'],
    icon: MdGridView
  },
  {
    href: '/components/table',
    label: 'Table',
    body: `The Table primitive provides users with a styled and customizable table element.`,
    platforms: ['react'],
    icon: MdTableChart
  },
  {
    href: '/components/expander',
    label: 'Expander',
    body: `The Expander primitive enables users to expand or collapse a set of sections.`,
    platforms: ['react'],
    icon: MdExpand
  },
  {
    href: '/components/pagination',
    label: 'Pagination',
    body: `Pagination provides navigation to allow customers to move between large sets of content that are distributed across multiple pages.`,
    platforms: ['react'],
    icon: MdMoreHoriz
  }
].sort(sortByLabel)

export const utilityComponents = [
  {
    href: '/components/visuallyhidden',
    label: 'Visually Hidden',
    body: `The Visually Hidden component is used to visually hide content while leaving it available to screen readers.`,
    platforms: ['react'],
    icon: MdDisabledVisible
  }
].sort(sortByLabel)

export const navigationComponents: ComponentNavItem[] = [
  {
    href: '/components/link',
    label: 'Link',
    body: `Links are customizable and themable elements used for Navigation. By default Links render an anchor tag but can be configured to be used with routing libraries.`,
    platforms: ['react'],
    icon: MdLink
  },
  {
    href: '/components/menu',
    label: 'Menu',
    body: `Menu provides an accessible, interactive menu for selecting actions within an application. Dropdown menu is collision-aware and will automatically change location based on available space.`,
    platforms: ['react'],
    icon: MdMenu
  },
  {
    href: '/components/tabs',
    label: 'Tabs',
    body: `Tabs organize content into multiple sections and allow users to navigate between them.`,
    platforms: ['react'],
    icon: MdTab
  }
].sort(sortByLabel)

export const primitiveComponents = [
  {
    components: [
      {
        href: '/components',
        label: 'Overview',
        platforms: ['react']
      }
    ]
  },
  {
    heading: 'Base',
    components: baseComponents
  },
  {
    heading: 'Feedback',
    components: feedbackComponents
  },
  {
    heading: 'Navigation',
    components: navigationComponents
  },
  {
    heading: 'Inputs',
    components: inputComponents
  },
  {
    heading: 'Layout',
    components: layoutComponents
  },
  {
    heading: 'Data display',
    components: dataDisplayComponents
  },
  {
    heading: 'Utilities',
    components: utilityComponents
  }
]

export const legacyComponents = [
  {
    href: '/legacy-components/chatbot',
    label: 'Chatbot',
    body: 'Chatbot automatically renders a complete chat messaging interface that can be used out-of-the-box, or it can be customized using theming support.',
    platforms: ['react', 'vue', 'angular']
  },
  {
    href: '/legacy-components/storage',
    label: 'Storage',
    body: 'A set of components to help interact with S3 storage.',
    platforms: ['react', 'vue', 'angular']
  }
]

export const guides = [
  {
    href: '/guides',
    label: 'Overview'
  },
  {
    href: '/guides/css-in-js',
    label: 'CSS in JS',
    platforms: ['react', 'vue', 'angular']
  },
  {
    href: '/guides/auth-protected',
    label: 'Protected Routes',
    platforms: ['react']
  }
]

export const gettingStarted = [
  {
    href: '/getting-started/introduction',
    label: 'Introduction'
  }
]

export const theming = [
  {
    href: '/theming',
    label: 'Overview'
  },
  {
    href: '/theming/responsive',
    label: 'Responsive',
    platforms: ['react']
  },
  {
    href: '/theming/default-theme',
    label: 'Default Theme',
    platforms: ['react', 'vue', 'angular']
  },
  {
    href: '/theming/default-theme/colors',
    label: 'Colors',
    platforms: ['react', 'vue', 'angular'],
    tertiary: true
  },
  {
    href: '/theming/default-theme/typography',
    label: 'Typography',
    platforms: ['react', 'vue', 'angular'],
    tertiary: true
  },
  {
    href: '/theming/default-theme/sizes',
    label: 'Sizes',
    platforms: ['react', 'vue', 'angular'],
    tertiary: true
  },
  {
    href: '/theming/dark-mode',
    label: 'Dark mode'
  },
  {
    href: '/theming/css-variables',
    label: 'CSS variables',
    platforms: ['react', 'vue', 'angular']
  },
  {
    href: '/theming/style-props',
    label: 'Style Props',
    platforms: ['react']
  }
]

export const DISCORD = 'https://discord.gg/amplify'
export const COMMUNITY = 'https://amplify.aws/community'
export const COMMUNITY_EVENTS = 'https://amplify.aws/community/events'
export const COMMUNITY_POSTS = 'https://amplify.aws/community/posts'
export const COMMUNITY_CONTRIBUTORS =
  'https://amplify.aws/community/contributors'
export const COMMUNITY_NEWSLETTERS = 'https://amplify.aws/community/newsletters'
export const TWITTER = 'https://twitter.com/AWSAmplify'
export const GITHUB = 'https://github.com/aws-amplify'
export const TERMS = 'https://aws.amazon.com/terms/'
export const PRIVACY = 'https://aws.amazon.com/privacy/'
export const MARKETING = 'https://aws.amazon.com/amplify/framework/'
export const AWS_USER_GUIDE =
  'https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html'
export const IOS_REFERENCE = 'https://aws-amplify.github.io/amplify-ios/docs/'
export const ANDROID_REFERENCE =
  'https://aws-amplify.github.io/aws-sdk-android/docs/reference/'
export const JS_REFERENCE = 'https://aws-amplify.github.io/amplify-js/api/'

export const GITHUB_REPO = `${GITHUB}/amplify-ui/`
export const GITHUB_REPO_FILE = `${GITHUB_REPO}/blob/main/`
