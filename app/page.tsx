import '@root/global.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

import Accordion from '@components/Accordion';
import ActionBar from '@components/ActionBar';
import ActionButton from '@components/ActionButton';
import ActionListItem from '@components/ActionListItem';
import AlertBanner from '@components/AlertBanner';
import Avatar from '@components/Avatar';
import Badge from '@components/Badge';
import BarLoader from '@components/BarLoader';
import Block from '@components/Block';
import BlockLoader from '@components/BlockLoader';
import Breadcrumbs from '@components/BreadCrumbs';
import Button from '@components/Button';
import CanvasPlatformer from '@components/CanvasPlatformer';
import Card from '@components/Card';
import Checkbox from '@components/Checkbox';
import DataTable from '@components/DataTable';
import DebugGrid from '@components/DebugGrid';
import DefaultActionBar from '@components/page/DefaultActionBar';
import DefaultLayout from '@components/page/DefaultLayout';
import Grid from '@components/Grid';
import Indent from '@components/Indent';
import ListItem from '@components/ListItem';
import MatrixLoader from '@components/MatrixLoader';
import ModalAlert from '@components/modals/ModalAlert';
import ModalStack from '@components/ModalStack';
import ModalTrigger from '@components/ModalTrigger';
import NumberRangeSlider from '@components/NumberRangeSlider';
import Package from '@root/package.json';
import Row from '@components/Row';
import Script from 'next/script';
import Text from '@components/Text';

export const dynamic = 'force-static';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://sacred.computer';
  const handle = '@internetxstudio';

  return {
    description,
    icons: {
      apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      icon: '/favicon-32x32.png',
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
      shortcut: '/favicon-16x16.png',
    },
    metadataBase: new URL('https://wireframes.internet.dev'),
    openGraph: {
      description,
      images: [
        {
          url: 'https://next-s3-public.s3.us-west-2.amazonaws.com/social/social-sacred-computer.png',
          width: 1500,
          height: 785,
        },
      ],
      title,
      type: 'website',
      url,
    },
    title,
    twitter: {
      card: 'summary_large_image',
      description,
      handle,
      images: ['https://next-s3-public.s3.us-west-2.amazonaws.com/social/social-sacred-computer.png'],
      title,
      url,
    },
    url,
  };
}

const SAMPLE_TABLE_DATA_CHANGE_ME = [
  ['NAME', 'SYMBOL', 'PRICE', 'HOLDINGS'],
  ['Bat', 'BAT', '$9.01', '400'],
  ['Bear', 'BR', '$56.78', '200'],
  ['Camel', 'CML', '$55.67', '70'],
  ['Cheetah', 'CHT', '$13.45', '150'],
  ['Crab', 'CRB', '$15.67', '250'],
  ['Deer', 'DER', '$29.99', '110'],
  ['Dolphin', 'DLP', '$77.89', '50'],
  ['Eagle', 'EGL', '$45.67', '90'],
  ['Falcon', 'FLC', '$40.22', '85'],
  ['Fox', 'FOX', '$12.34', '100'],
  ['Frog', 'FRG', '$7.89', '400'],
  ['Giraffe', 'GRF', '$44.56', '80'],
  ['Hedgehog', 'HDG', '$11.23', '200'],
  ['Horse', 'HRS', '$54.32', '70'],
  ['Kangaroo', 'KNG', '$15.67', '120'],
  ['Koala', 'KLA', '$22.34', '150'],
  ['Leopard', 'LPR', '$14.56', '110'],
  ['Lemur', 'LMR', '$11.12', '320'],
  ['Lion', 'LION', '$67.89', '80'],
  ['Lynx', 'LNX', '$16.78', '130'],
  ['Mouse', 'MSE', '$5.12', '500'],
  ['Octopus', 'OCT', '$88.90', '40'],
  ['Otter', 'OTR', '$20.21', '180'],
  ['Owl', 'OWL', '$19.01', '160'],
  ['Panda', 'PND', '$78.90', '55'],
  ['Peacock', 'PCK', '$12.34', '100'],
  ['Penguin', 'PNG', '$33.45', '90'],
  ['Porcupine', 'PRC', '$17.89', '140'],
  ['Rabbit', 'RBT', '$9.10', '350'],
  ['Raccoon', 'RCC', '$18.90', '150'],
  ['Shark', 'SHK', '$89.01', '50'],
  ['Snake', 'SNK', '$10.11', '300'],
  ['Squirrel', 'SQL', '$10.12', '250'],
  ['Tiger', 'TGR', '$34.56', '120'],
  ['Turtle', 'TRL', '$66.78', '60'],
  ['Whale', 'WHL', '$123.45', '30'],
  ['Wolf', 'WLF', '$23.45', '150'],
  ['Zebra', 'ZBR', '$65.43', '60'],
];

export default async function Page(props) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <br />
      <Grid>
        <MatrixLoader direction="left-to-right" rows={8} mode="greek" />
        <br />
        <Row>
          <strong>
            {Package.name} <Badge>Version {Package.version}</Badge>
          </strong>
        </Row>
        <Row>{Package.description}</Row>
      </Grid>

      <DebugGrid />
      <DefaultActionBar />

      <Grid>
        <ActionListItem icon={`⭢`} href="https://internet.dev" target="_blank">
          Hire our studio to build your applications
        </ActionListItem>
        <ActionListItem icon={`⭢`} href="https://github.com/internet-development/www-sacred" target="_blank">
          View the SRCL source code
        </ActionListItem>
        <ActionListItem icon={`⭢`} href="https://vercel.com/home" target="_blank">
          Try our hosting provider Vercel
        </ActionListItem>
      </Grid>
      <Grid>
        <Accordion defaultValue={true} title="ACTION BAR">
          The action bar is a container for primary and secondary actions styled with a monospace font. Positioned at the top or bottom of an interface, it organizes elements like menu options, navigation buttons, titles, or search fields.
          <br />
          <br />
          <Card title="EXAMPLE">
            <ActionBar
              items={[
                {
                  hotkey: '⌘+1',
                  body: 'Example I',
                },
                {
                  hotkey: '⌘+2',
                  body: 'Example II',
                },
                {
                  hotkey: '⌘+3',
                  body: 'Example III',
                },
              ]}
            />
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="ACCORDION">
          Accordion components are vertically stacked, expandable panels designed for efficient use of space in monospace-driven layouts, often inspired by classic terminal interfaces. Each panel consists of a header and its corresponding content area, allowing users to toggle between a condensed summary and detailed information.
          <br />
          <br />
          <Card title="EXAMPLE">
            <Accordion defaultValue={true} title="ACCORDION EXAMPLE">
              There are two visions of America a half century from now. One is of a society more divided between the haves and the have-nots, a country in which the rich live in gated communities, send their children to expensive schools, and have access to first-rate medical care. Meanwhile, the rest live in a world marked by insecurity, at best mediocre education, and in effect rationed health care―they hope and pray they don't get seriously sick. At the bottom are millions of young people alienated and without hope. I have seen that picture in many developing countries; economists have given it a name, a dual economy, two societies living side by side, but hardly knowing each other, hardly imagining what life is like for the other. Whether we will fall to the depths of some countries, where the gates grow higher and the societies split farther and farther apart, I do not know. It is, however, the nightmare towards which we are slowly marching.
            </Accordion>
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="ACTION BUTTON">
          Action buttons let users perform actions. They are used for task-based options within a workflow and work well in interfaces where buttons need to stay understated.
          <br />
          <br />
          <Card title="EXAMPLE">
            <ActionButton hotkey="⌘+S">Save</ActionButton>
            <br />
            <ActionButton hotkey={<BlockLoader mode={9} />}>Loading</ActionButton>
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="ACTION LIST">
          Action lists are a vertical list of interactive actions or options. It displays items in a single-column format with space for icons, descriptions, side information, and other visuals. The monospace font ensures clarity and consistency.
          <br />
          <br />
          <Card title="EXAMPLE">
            <ActionListItem icon={`⭡`}>Hide item example</ActionListItem>
            <ActionListItem icon={`⭢`}>Next item example</ActionListItem>
            <ActionListItem icon={`⭣`}>Show item example</ActionListItem>
            <ActionListItem icon={`⭠`} href="/">
              Return item example
            </ActionListItem>
            <ActionListItem icon={`⊹`}>Action item example</ActionListItem>
            <ActionListItem icon={`⊹`} href="https://internet.dev" target="_blank">
              Visit the studio website
            </ActionListItem>
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="ALERT BANNER">
          Alert banners display important messages across the user interface. It communicates system-wide issues, errors, warnings, or informational updates. Typically placed at the top of a page, it includes a clear message and may provide an action for the user. Alert Banners can be dismissed after being read, helping users stay informed about significant changes or information.
          <br />
          <br />
          <Card title="EXAMPLE">
            <AlertBanner>When things reach the extreme, they alternate to the opposite.</AlertBanner>
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="AVATAR">
          Avatars identify users or entities in the interface. It can display an image, initials, or an icon, offering a visual connection to the user. Avatars appear in headers, comments, profiles, and messages. They provide quick recognition and add a personal touch to the digital experience.
          <br />
          <br />
          <Card title="EXAMPLE">
            <Avatar src="https://pbs.twimg.com/profile_images/1818030201051430918/M6kSNje3_400x400.jpg" href="https://internet.dev" target="_blank" />
            <Avatar src="https://pbs.twimg.com/profile_images/1768438338841890816/taF_Uvqu_400x400.jpg" href="https://internet.dev" target="_blank" />
            <Avatar src="https://pbs.twimg.com/profile_images/1748647089633169408/B7vd7ito_400x400.jpg" href="https://internet.dev" target="_blank" />
            <Avatar src="https://pbs.twimg.com/profile_images/1778697935544627200/1LvOcE-F_400x400.jpg" href="https://internet.dev" target="_blank" />
            <Avatar src="https://pbs.twimg.com/profile_images/1841883108305731585/3rhRm7aY_400x400.jpg" href="https://internet.dev" target="_blank" />
            <Avatar src="https://avatars.githubusercontent.com/u/10610892?v=4" href="https://internet.dev" target="_blank" />
            <br />
            <br />
            <Avatar src="https://pbs.twimg.com/profile_images/1818030201051430918/M6kSNje3_400x400.jpg" href="https://internet.dev" target="_blank">
              <Indent>
                <strong>Andy Alimbuyuguen</strong>
                <br />
                Webmaster
              </Indent>
            </Avatar>
            <Avatar src="https://pbs.twimg.com/profile_images/1768438338841890816/taF_Uvqu_400x400.jpg" href="https://internet.dev" target="_blank">
              <Indent>
                <strong>Jimmy Lee</strong>
                <br />
                Janitor
              </Indent>
            </Avatar>
            <Avatar src="https://pbs.twimg.com/profile_images/1748647089633169408/B7vd7ito_400x400.jpg" href="https://internet.dev" target="_blank">
              <Indent>
                <strong>Anastasiya Uraleva</strong>
                <br />
                Webmaster
              </Indent>
            </Avatar>
            <Avatar src="https://pbs.twimg.com/profile_images/1778697935544627200/1LvOcE-F_400x400.jpg" href="https://internet.dev" target="_blank">
              <Indent>
                <strong>Elijah Seed Arita</strong>
                <br />
                Webmaster
              </Indent>
            </Avatar>
            <Avatar src="https://pbs.twimg.com/profile_images/1841883108305731585/3rhRm7aY_400x400.jpg" href="https://internet.dev" target="_blank">
              <Indent>
                <strong>Xiangan He</strong>
                <br />
                Webmaster
              </Indent>
            </Avatar>
            <Avatar src="https://avatars.githubusercontent.com/u/10610892?v=4" href="https://internet.dev" target="_blank">
              <Indent>
                <strong>Chenyu Huang</strong>
                <br />
                Webmaster
              </Indent>
            </Avatar>
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="BADGES">
          Badges communicate status, notification counts, or attribute labels. Typically circular or pill-shaped, they display a number or short text, often overlaid on an icon or element. Badges highlight updates, unread messages, or categorize items with status indicators. They provide critical information at a glance, improving navigation and user engagement.
          <br />
          <br />
          <Card title="EXAMPLE">
            <Badge>Example</Badge>
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="BAR LOADER">
          A long loader is a visual element that signals ongoing activity or progress, reassuring users that a task is being processed. Commonly used during actions like data fetching or file uploads, it provides feedback to reduce uncertainty.
          <br />
          <br />
          <Card title="EXAMPLE">
            <BarLoader intervalRate={1000} />
            <BarLoader intervalRate={100} />
            <BarLoader progress={50} />
            <BarLoader progress={100} />
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="BLOCK LOADER">
          A block loader is a visual indicator that signals ongoing activity or progress while occupying only a single character of space. It reassures users that a task is being processed or that activity is occurring.
          <br />
          <br />
          <Card title="EXAMPLE">
            <BlockLoader mode={0} />
            <br />
            <BlockLoader mode={1} />
            <br />
            <BlockLoader mode={2} />
            <br />
            <BlockLoader mode={3} />
            <br />
            <BlockLoader mode={4} />
            <br />
            <BlockLoader mode={5} />
            <br />
            <BlockLoader mode={6} />
            <br />
            <BlockLoader mode={7} />
            <br />
            <BlockLoader mode={8} />
            <br />
            <BlockLoader mode={9} />
            <br />
            <BlockLoader mode={10} />
            <br />
            <BlockLoader mode={11} />
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="BREADCRUMBS">
          Breadcrumbs display the current page or context within a website or application. They show the hierarchy and navigation path, helping users understand their location. Breadcrumbs allow users to navigate back through levels or categories and are especially useful for deeply nested pages.
          <br />
          <br />
          <Card title="EXAMPLE">
            <Breadcrumbs
              items={[
                {
                  name: `Philosophical Taoism`,
                  url: 'https://en.wikipedia.org/wiki/Taoist_philosophy',
                },
                {
                  name: `Ursula K. Le Guin`,
                  url: 'https://en.wikipedia.org/wiki/Ursula_K._Le_Guin',
                },
                {
                  name: `The Lathe of Heaven`,
                  url: 'https://en.wikipedia.org/wiki/The_Lathe_of_Heaven',
                },
              ]}
            />
            <br />
            <br />
            <Breadcrumbs
              items={[
                {
                  name: `161 AD`,
                  url: 'https://en.wikipedia.org/wiki/161',
                },
                {
                  name: `Nerva–Antonine dynasty`,
                  url: 'https://en.wikipedia.org/wiki/Nerva–Antonine_dynasty',
                },
                {
                  name: `Marcus Aurelius Antoninus`,
                  url: 'https://en.wikipedia.org/wiki/Marcus_Aurelius',
                },
                {
                  name: `The Meditations`,
                  url: 'https://classics.mit.edu/Antoninus/meditations.html',
                },
              ]}
            />
            <br />
            <br />
            <Breadcrumbs
              items={[
                {
                  name: `Orthos Logos`,
                  url: 'https://orthoslogos.fr/',
                },
                {
                  name: `Littérature`,
                  url: 'https://orthoslogos.fr/litterature',
                },
                {
                  name: `Discours`,
                  url: 'https://orthoslogos.fr/litterature/discours/',
                },
                {
                  name: `Patrick Geddes`,
                  url: 'https://en.wikipedia.org/wiki/Patrick_Geddes',
                },
              ]}
            />
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="BUTTON">
          Button components are essential interactive elements within SCL, facilitating actions like navigation, form submission, and command execution.
          <br />
          <br />
          <Card title="EXAMPLE">
            <Button>Primary Button</Button>
            <br />
            <Button theme="SECONDARY">Secondary Button</Button>
            <br />
            <Button isDisabled>Disabled Button</Button>
          </Card>
        </Accordion>

        <Accordion defaultValue={false} title="BUTTON GROUP">
          Button groups organize related actions in a shared container, providing quick access to frequently used tasks. These buttons are visually connected, indicating their related functions. Button Groups are useful for tasks like switching views, applying modes, or grouping actions in toolbars or menus.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={true} title="CANVAS PLATFORMER">
          This canvas component provides a basic starting point for building a 2D platform game directly on a canvas element. It currently supports simple character jumping and rudimentary collision detection, making it easy to set up a foundational scene.
          <br />
          <br />
          <Card title="EXAMPLE">
            <CanvasPlatformer rows={12} />
          </Card>
        </Accordion>


        <Accordion defaultValue={true} title="CARDS">
          Cards are containers for content and actions related to a specific topic. They group information, helping users browse related items or actions. Cards provide a preview of content, encouraging further interaction for more details. They can be used for purposes like displaying introductory content, instructions, or suggestions.
          <br />
          <br />
          <Card title="EXAMPLE A" mode="left">
            <Card title="EXAMPLE B" mode="right">
              <Card title="EXAMPLE C">
                <Card title="EXAMPLE D">Hello there!</Card>
              </Card>
            </Card>
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="CHECKBOX">
          Checkboxes represent a binary choice, letting users toggle options on or off. Each Checkbox operates independently, allowing multiple selections without affecting others. Checkboxes are ideal for forms, surveys, or scenarios requiring multi-selection, providing a simple way for user input.
          <br />
          <br />
          <Card title="EXAMPLE">
            <Checkbox name="1">The past, though a tutor, is not a thing to lament, but a wellspring of wisdom from which we draw without regret.</Checkbox>
            <Checkbox name="2">A measure of obsession doth sharpen the will, for the long path, though beset with trials, leadeth ever toward glories.</Checkbox>
            <Checkbox name="3">Kindness and gratitude must light our way in all dealings, regardless of circumstance.</Checkbox>
            <Checkbox name="4">Stand firm beside thy fellow for shared triumph is the sweetest of all.</Checkbox>
            <Checkbox name="5">Let us strive that design be not a mere ornament to the world, but a worthy service to humanity itself.</Checkbox>
            <Checkbox name="6">Artifacts built with care do grant webmasters the power to shape their own fates, and to serve those thou dost cherish is an honor beyond measure.</Checkbox>
            <Checkbox name="7">Intensity, as fire contained, burneth most brightly when turned toward aims; thus, let us spurn the call of mediocrity and cast aside the seductions of decay.</Checkbox>
            <Checkbox name="8">Mistakes are not curses, but treasures wrapped in adversity, offered to those wise enough to seize their lessons.</Checkbox>
            <Checkbox name="9">Expect naught, but receive all with gratitude, and find a place of trust wherein thou mayest dwell for a time.</Checkbox>
            <Checkbox name="10">From thy master learn what thou canst, and from all others likewise, for wisdom hath many guises.</Checkbox>
            <Checkbox name="11">To follow with discipline is good; to follow oneself with discipline is better.</Checkbox>
            <Checkbox name="12">Work with fervor and take joy where it may be found, for the making is as sweet as the outcome.</Checkbox>
            <Checkbox name="13">Be mindful that there are ever more ways than two, and seek not merely to follow the trade but to alter its course, bringing value wherever it is given thee to do so.</Checkbox>
            <Checkbox name="14">Whether rewarded or not, let us ply our craft for the love of it, for therein lies mastery.</Checkbox>
            <Checkbox name="15">Assume nothing, and let no person escape thy regard.</Checkbox>
            <Checkbox name="16">A fine process doth honor the task, but let the result be no less fine.</Checkbox>
            <Checkbox name="17">Keep faith with those who make promises, and shouldst thou be called to push others, push thyself the harder.</Checkbox>
            <Checkbox name="18">Thy health is thy treasure, and building a company shall be no graceful dance, but a contest of strife.</Checkbox>
            <Checkbox name="19">Take always the first step, for even in failure doth wisdom grow.</Checkbox>
            <Checkbox name="20">Seek ever to broaden thy knowledge of art, software, music, letters, and all things ancient and new, for these are the treasures of the mind.</Checkbox>
            <Checkbox name="21">Thy fate lieth ever in thine own hands, and the soul readeth not only the landscape, but the heart that beats beneath it.</Checkbox>
            <Checkbox name="22">Let thy voice be thine own, unborrowed and unbowed, and make it heard without fear.</Checkbox>
            <Checkbox name="23">Rejoice in the victories of thy fellow webmasters, for in bearing witness to their triumphs is joy in its truest form.</Checkbox>
            <Checkbox name="24">Grow accustomed to the weight of pressure, for in such a forge is the finest steel tempered.</Checkbox>
            <Checkbox name="25">Thus do we press onward—undaunted and unyielding—in pursuit of a better physical and digital world.</Checkbox>
          </Card>
        </Accordion>

        <Accordion defaultValue={false} title="CHIP">
          Chips are compact, interactive elements that represent inputs, attributes, or actions. They are used for tasks like entering information, making selections, filtering content, or triggering actions. Chips help users scan and manage information efficiently.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="CODE SNIPPET">
          Code snippets display code examples clearly and concisely, making them easy to read, copy, and use. It is essential for technical documentation, user guides, or design handbooks, supporting code sharing and review.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="COMBOBOX">
          Comboboxes combine a dropdown list with an editable textbox, allowing users to select from a list or input data manually. It offers flexibility and autocomplete features, improving usability in scenarios where users may not know all options. Combobox is useful in forms, filtering lists, or any context requiring selection or custom input.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={true} title="DATA TABLE">
          Data tables are for organizing large datasets into rows and columns for clear visibility and easy interpretation. It is used in scenarios like reporting systems, dashboards, and list views where data needs comparison, analysis, or manipulation. Features like sorting, filtering, pagination, and inline editing make data handling more efficient. The entire table width is limited to 64ch to fit the grid precisely.
          <br />
          <br />
          <Card title="EXAMPLE">
            <DataTable data={SAMPLE_TABLE_DATA_CHANGE_ME} />
          </Card>
        </Accordion>

        <Accordion defaultValue={false} title="DATE PICKER">
          A date picker is a UI control for selecting dates, and sometimes time, through a visual calendar interface. It ensures accurate date input and avoids formatting errors. Commonly used in forms, scheduling, or date-related tasks, Date Picker offers features like day, month, year, and time selection.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="DIALOG">
          Dialogs are modal window that overlays the main content, used for tasks requiring input or confirmation without leaving the current context. Commonly used for alerts, confirmations, or data entry, Dialog captures user attention and provides options to accept, reject, or dismiss the information.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="DIVIDER">
          A divider separates sections of content, creating clear distinctions between related groups. It is typically a line or space, oriented horizontally or vertically based on the layout. Divider helps organize information, improve readability, and enhance the interface’s clarity and structure.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="DRAWER">
          A drawer is a panel that slides in from the screen edge, providing space for secondary content, actions, or navigation links while keeping the main content uninterrupted. Triggered by user actions like clicking or swiping, Drawers can be dismissed by interacting with the main content, closing manually, or selecting an item.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="DROPDOWN">
          A dropdown is an interactive element that lets users select an option from a collapsible menu, saving space by hiding options until needed. Commonly used in forms, action menus, or filters, Dropdowns support single or multi-selection and sometimes search.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="EMPTY STATE">
          An empty state informs users when no content is available, such as for first-time users, empty searches, or errors. Instead of showing a blank screen, it provides guidance, feedback, or calls to action to engage users. Empty State turns confusing moments into opportunities for onboarding, education, or improved satisfaction.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="INPUT">
          An input field is a fundamental UI component that allows users to enter and edit text or numerical data. It is commonly used in forms, search bars, and other interfaces requiring user input.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="FORM">
          A form is a key interface element for collecting user inputs. It includes fields like text boxes, dropdowns, checkboxes, radio buttons, or date pickers, designed for the required data.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="HELP TEXT">
          Help text is a brief description that provides instructions, additional information, or context to assist users. It is often placed with form fields, complex elements, or new features where clarification is needed.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="INLINE MESSAGE">
          An inline message is a small alert that provides contextual feedback or information during user interactions. It appears near specific elements, like form fields, to give immediate guidance or feedback.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="LABEL">
          Labels are text elements that identifies input fields or interface objects, providing clear descriptions to guide users in entering appropriate data. Often paired with form controls like checkboxes or radio buttons, Labels enhance accessibility and may include supplementary instructions.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={true} title="LINK">
          Links are interactive elements that enable navigation within an application or to external resources, typically styled with underlining or distinct colors to indicate clickability.
          <br />
          <br />
          <Card title="EXAMPLE">
            <ol>
              <ListItem>
                <a href="https://www.tumblr.com/tagged/hiroo%20isono" target="_blank">
                  Hirō Isono
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.tumblr.com/tagged/rebecca%20guay" target="_blank">
                  Rebecca Guay
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.tumblr.com/tagged/terese%20nielsen" target="_blank">
                  Terese Nielsen
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.tumblr.com/tagged/pablo%20uchida" target="_blank">
                  Pablo Uchida
                </a>
              </ListItem>
              <ListItem>
                <a href="https://www.tumblr.com/tagged/claude%20monet" target="_blank">
                  Oscar-Claude Monet
                </a>
              </ListItem>
              <ol>
                <ListItem>
                  <a href="https://en.wikipedia.org/wiki/Impressionism" target="_blank">
                    Impressionism
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://en.wikipedia.org/wiki/Modernism" target="_blank">
                    Modernism
                  </a>
                </ListItem>
                <ListItem>
                  <a href="https://en.wikipedia.org/wiki/En_plein_air" target="_blank">
                    Painting Outdoors
                  </a>
                </ListItem>
              </ol>
            </ol>
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="LIST">
          Lists are flexible interface elements used to display a series of items in an organized way. They are often used to present data, menu options, or search results and can be ordered or unordered, with interactive elements like checkboxes or buttons.
          <br />
          <br />
          <Card title="EXAMPLE">
            <ol>
              <ListItem>Year of the Four Emperors</ListItem>
              <ListItem>Flavian dynasty</ListItem>
              <ListItem>Nerva–Antonine dynasty</ListItem>
              <ol>
                <ListItem>Marcus Cocceius Nerva</ListItem>
                <ListItem>Marcus Ulpius Traianus</ListItem>
                <ListItem>Publius Aelius Hadrianus</ListItem>
                <ListItem>Titus Aelius Hadrianus Antoninus Pius</ListItem>
                <ListItem>Marcus Aurelius Antoninus</ListItem>
                <ol>
                  <ListItem>Hellenistic philosophy</ListItem>
                  <ListItem>Western philosophy</ListItem>
                  <ListItem>Stoicism</ListItem>
                </ol>
              </ol>
              <ListItem>Year of the Five Emperors</ListItem>
            </ol>
            <br />
            <ul>
              <ListItem>Book of Changes (The I Ching)</ListItem>
              <ListItem>The Analects</ListItem>
              <ListItem>Taoism</ListItem>
              <ListItem>Thirty-Six Stratagems</ListItem>
              <ul>
                <ListItem>Deceive the heavens to cross the sea</ListItem>
                <ListItem>Make a sound in the east, then strike in the west</ListItem>
                <ListItem>Create something from nothing</ListItem>
              </ul>
              <ListItem>The Art of War</ListItem>
              <ListItem>Wuzi</ListItem>
              <ListItem>Six Secret Teachings</ListItem>
            </ul>
          </Card>
        </Accordion>

        <Accordion defaultValue={false} title="MENUS">
          Menus are dynamic UI elements that combine action lists and overlay patterns to provide a roster of items representing commands, actions, or selections, supporting single or multi-select capabilities. They offer a space-efficient way to present choices, enabling users to execute actions, adjust settings, or make selections within a transient container.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={true} title="MATRIX LOADER">
          A Matrix Loader (screen) is a visual element that simulates the iconic green, cascading code streams featured in the Matrix films. These screens often serve as dynamic backdrops, thematic treatments, or stylized representations of complex digital data. This version fits SRCL's theming and monospace font usage.
          <br />
          <br />
          <Card title="EXAMPLE">
            <MatrixLoader rows={32} mode="katakana" />
          </Card>
        </Accordion>

        <Accordion defaultValue={true} title="MODAL">
          Modals are dialog boxes or popups that overlay the main content, requiring user interaction. They are used to capture inputs, display information, or focus on specific tasks without leaving the current context, often accompanied by an overlay to maintain focus
          <br />
          <br />
          <Card title="EXAMPLE">
            <ModalTrigger
              modal={ModalAlert}
              modalProps={{
                message: 'During the 1960s, Ritchie and Ken Thompson worked on the Multics operating system at Bell Labs. Thompson then found an old PDP-7 machine and developed his own application programs and operating system from scratch, aided by Ritchie and others. In 1970, Brian Kernighan suggested the name "Unix", a pun on the name "Multics". To supplement assembly language with a system-level programming language, Thompson created B. Later, B was replaced by C, created by Ritchie, who continued to contribute to the development of Unix and C for many years.',
                buttonText: 'Sweet, thanks.',
              }}
            >
              <ActionButton>Render Alert Modal A</ActionButton>
            </ModalTrigger>
            <ModalTrigger modal={ModalAlert} modalProps={{ message: `Dennis Ritchie and Ken Thompson's creation of the UNIX operating system and the C programming language were pivotal developments in the progress of computer science. Today, 50 years after its beginnings, UNIX and UNIX-like systems continue to run machinery from supercomputers to smartphones.` }}>
              <ActionButton>Render Alert Modal B</ActionButton>
            </ModalTrigger>
          </Card>
        </Accordion>

        <Accordion defaultValue={false} title="NAVIGATION BAR">
          Navigation bars enable smooth transitions between top-level destinations in an app, using icons and text labels to represent sections.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="PAGE HEADER">
          Page headers are key interface elements typically placed at the top of a page to provide context and indicate the current location within an application or website.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="PAGINATION">
          Pagination is an interface control that enables navigation through large datasets spread across multiple pages. Commonly found at the bottom of tables or lists, it allows users to move to the next, previous, first, last, or specific pages.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="POPOVER">
          Popovers are transient views that appear above content when users interact with an associated element, offering relevant information, details, or interactive content like actions or form elements.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="PROGRESS BAR">
          Progress bars are visual indicators that show the completion status of tasks or processes, such as form completion or system operations. They can be determinate, displaying a specific percentage, or indeterminate, for tasks with unknown durations.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="RADIO BUTTON">
          Radio buttons are visual controls that let users make a single selection from a predefined set of mutually exclusive options. Represented as small circles that fill when selected, they are used when all options need to be visible and only one can be chosen.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="SELECT">
          Select components are user interface controls that let users choose an option from a dropdown list. They display a list of options and collapse to show the selected choice, making them ideal for scenarios with limited space and multiple options.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="SIDEBAR">
          Sidebars are navigational panels that provide seamless access to secondary actions, additional information, or sub-navigation menus related to the current page or section. They can be static or collapsible, adapting to design needs and screen sizes.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={true} title="SLIDER">
          Sliders are interactive UI elements that let users select a single value or range from a continuum. Designed as a horizontal track with a draggable handle, they are ideal for adjusting settings like volume, brightness, or color saturation.
          <br />
          <br />
          <Card title="EXAMPLE">
            <NumberRangeSlider defaultValue={0} min={0} max={5000} step={1} />
            <NumberRangeSlider defaultValue={0} min={0} max={10000} step={1} />
            <NumberRangeSlider defaultValue={0} min={0} max={15000} step={1} />
            <NumberRangeSlider defaultValue={0} min={0} max={20000} step={1} />
            <NumberRangeSlider defaultValue={0} min={0} max={100000} step={1} />
          </Card>
        </Accordion>

        <Accordion defaultValue={false} title="SNACKBAR">
          Snackbars are brief messages that appear at the bottom of the screen to provide feedback on operations, such as task completion or new data arrival. They are transient, disappearing automatically after a few seconds, but may include a dismiss option or action button.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="SWITCH">
          Switches are toggle controls that let users turn a single option on or off, commonly used for binary settings like enabling or disabling features. They provide immediate visual feedback, making them intuitive and efficient.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="TABS">
          Tabs are interactive UI elements that allow users to switch between different views or subsections within the same context. Each tab corresponds to distinct content, with only one active at a time, typically positioned at the top of the content area.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="TAG">
          Tags are interactive UI elements that represent information as keywords or attributes, commonly used for labeling, categorizing, or adding metadata to items. They often include text labels and may feature icons for removal, especially in input fields.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="TEXT AREA">
          Text areas are UI elements that allow users to input multiple lines of text, supporting line breaks for content like comments, reviews, or descriptions. Ours includes a scrollbar for larger text and is resizable.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="TOOLTIP">
          Tooltips are text labels that provide additional context or explanations for user interface elements, appearing on hover, focus, or touch. They are used to communicate brief, supplementary information or clarify unlabeled controls.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>

        <Accordion defaultValue={false} title="TREEVIEW">
          Tree Views are hierarchical list structures that allow users to navigate nested information or functionalities, commonly used for parent-child relationships like file directories or menus.
          <br />
          <br />
          <Card title="EXAMPLE">WORK IN PROGRESS</Card>
        </Accordion>
      </Grid>

      <Grid>
        <Text>{`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z`}</Text>
        <Text>{`-- --- == === != !== =!= =:= =/= <= >= && &&& &= ++ +++ *** ;; !! ?? ??? ?: ?. ?= <: :< :> >: <:< <> <<< >>> << >> || -| _|_ |- ||- |= ||= ## ### #### #{ #[ ]# #( #? #_ #_( #: #! #= ^= <$> <$ $> <+> <+ +> <*> <* *> </ </> /> <!-- <#-- --> -> ->> <<- <- <=< =<< <<= <== <=> <==> ==> => =>> >=> >>= >>- >- -< -<< >-> <-< <-| <=| |=> |-> <-> <~~ <~ <~> ~~ ~~> ~> ~- -~ ~@ [||] |] [| |} {| [< >] |> <| ||> <|| |||> <||| <|> ... .. .= ..< .? :: ::: := ::= :? :?> // /// /* */ /= //= /== @_ __ ??? <:< ;;;`}</Text>
        <Text>{`-- --- == === != !== =!= =:= =/= <= >= && &&& &= ++ +++ *** ;; !! ?? ??? ?: ?. ?= <: :< :> >: <:< <> <<< >>> << >> || -| _|_ |- ||- |= ||= ## ### #### #{ #[ ]# #( #? #_ #_( #: #! #= ^= <$> <$ $> <+> <+ +> <*> <* *> </ </> /> <!-- <#-- --> -> ->> <<- <- <=< =<< <<= <== <=> <==> ==> => =>> >=> >>= >>- >- -< -<< >-> <-< <-| <=| |=> |-> <-> <~~ <~ <~> ~~ ~~> ~> ~- -~ ~@ [||] |] [| |} {| [< >] |> <| ||> <|| |||> <||| <|> ... .. .= ..< .? :: ::: := ::= :? :?> // /// /* */ /= //= /== @_ __ ??? <:< ;;;`}</Text>
        <Text>{`Á Ă Ắ Ặ Ằ Ẳ Ẵ Ǎ Â Ấ Ậ Ầ Ẩ Ẫ Ä Ạ À Ả Ā Ą Å Ã Æ Ǽ Ć Č Ç Ĉ Ċ Ð Ď Đ É Ĕ Ě Ê Ế Ệ Ề Ể Ễ Ë Ė Ẹ È Ẻ Ē Ę Ɛ Ẽ Ǵ Ğ Ǧ Ĝ Ģ Ġ Ħ Ĥ Í Ĭ Î Ï İ Ị Ì Ỉ Ī Į Ĩ Ĵ Ķ Ĺ Ľ Ļ Ŀ Ł Ń Ň Ņ Ŋ Ñ Ó Ŏ Ô Ố Ộ Ồ Ổ Ỗ Ö Ọ Ò Ỏ Ơ Ớ Ợ Ờ Ở Ỡ Ő Ō Ǫ Ø Ǿ Õ Œ Þ Ŕ Ř Ŗ Ś Š Ş Ŝ Ș ẞ Ə Ŧ Ť Ţ Ț Ú Ŭ Û Ü Ụ Ù Ủ Ư Ứ Ự Ừ Ử Ữ Ű Ū Ų Ů Ũ Ẃ Ŵ Ẅ Ẁ Ý Ŷ Ÿ Ỵ Ỳ Ỷ Ȳ Ỹ Ź Ž Ż á ă â ä à ā ą å ã æ ǽ ć č ç ĉ ċ ð ď đ é ĕ ě ê ë ė è ē ę ə ğ ǧ ĝ ġ ħ ĥ i ı í ĭ î ï ì ī į ĩ j ȷ ĵ ĸ l ĺ ľ ŀ ł m n ń ŉ ň ŋ ñ ó ŏ ô ö ò ơ ő ō ø ǿ õ œ þ ŕ ř s ś š ş ŝ ß ſ ŧ ť ú ŭ û ü ù ư ű ū ģ ķ ļ ņ ŗ ţ ǫ ǵ ș ț ạ ả ấ ầ ẩ ẫ ậ ắ ằ ẳ ẵ ặ ẹ ẻ ẽ ế ề ể ễ ệ ỉ ị ọ ỏ ố ồ ổ ỗ ộ ớ ờ ở ỡ ợ ụ ủ ứ ừ ử ữ ự ỵ ỷ ỹ ų ů ũ ẃ ŵ ẅ ẁ ý ŷ ÿ ỳ z ź ž ż`}</Text>
        <Text>{`0 0 1 2 3 4 5 6 7 8 9 ₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ½ ¼ ¾ ↋ ↊ ૪`}</Text>
        <Text>{`. , : ; … ! ¡ ? ¿ · • * ⁅ ⁆ # ․ ‾ / \ ‿ ( ) { } [ ] ❰ ❮ ❱ ❯ ⌈ ⌊ ⌉ ⌋ ⦇ ⦈ - – — ‐ _ ‚ „ “ ” ‘ ’ « » ‹ › ‴ " ' ⟨ ⟪ ⟦ ⟩ ⟫ ⟧ · ;`}</Text>
        <Text>{`Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω Ά Έ Ή Ί Ό Ύ Ώ Ϊ Ϋ Ϗ α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ ς σ τ υ φ χ ψ ω ί ϊ ΐ ύ ϋ ΰ ό ώ ά έ ή ϗ ϕ ϖ`}</Text>
        <Text>{`А Б В Г Ѓ Ґ Д Е Ё Ж З И Й К Ќ Л М Н О П Р С Т У Ў Ф Х Ч Ц Ш Щ Џ Ь Ъ Ы Љ Њ Ѕ Є Э І Ї Ј Ћ Ю Я Ђ Ғ Қ Ң Ү Ұ Ҷ Һ Ә Ө Ӝ Ӟ Ӥ Ӧ Ө Ӵ а б в г ѓ ґ д е ё ж з и й к ќ л м н о п р с т у ў ф х ч ц ш щ џ ь ъ ы љ њ ѕ є э і ї ј ћ ю я ђ ғ қ ң ү ұ ҷ һ ә ө ӝ ӟ ӥ ӧ ө ӵ`}</Text>
        <Text>{`₿ ¢ ¤ $ ₫ € ƒ ₴ ₽ £ ₮ ¥ ≃ ∵ ≬ ⋈ ∙ ≔ ∁ ≅ ∐ ⎪ ⋎ ⋄ ∣ ∕ ∤ ∸ ⋐ ⋱ ∈ ∊ ⋮ ∎ ⁼ ≡ ≍ ∹ ∃ ∇ ≳ ∾ ⥊ ⟜ ⎩ ⎨ ⎧ ⋉ ⎢ ⎣ ⎡ ≲ ⋯ ∓ ≫ ≪ ⊸ ⊎ ⨀ ⨅ ⨆ ⊼ ⋂ ⋃ ≇ ⊈ ⊉ ⊽ ⊴ ≉ ∌ ∉ ≭ ≯ ≱ ≢ ≮ ≰ ⋢ ⊄ ⊅ +− × ÷ = ≠ > < ≥ ≤ ± ≈ ¬ ~ ^ ∞ ∅ ∧ ∨ ∩ ∪ ∫ ∆ ∏ ∑ √ ∂ µ ∥ ⎜ ⎝ ⎛ ⎟ ⎠ ⎞ % ‰ ﹢ ⁺ ≺ ≼ ∷ ≟ ∶ ⊆ ⊇ ⤖ ⎭ ⎬ ⎫ ⋊ ⎥ ⎦ ⎤ ⊢ ≗ ∘ ∼ ⊓ ⊔ ⊡ ⊟ ⊞ ⊠ ⊏ ⊑ ⊐ ⊒ ⋆ ≣ ⊂ ≻ ∋ ⅀ ⊃ ⊤ ⊣ ∄ ∴ ≋ ∀ ⋰ ⊥ ⊻ ⊛ ⊝ ⊜ ⊘ ⊖ ⊗ ⊙ ⊕ ↑ ↗ → ↘ ↓ ↙ ← ↖ ↔ ↕ ↝ ↭↞ ↠ ↢ ↣ ↥ ↦ ↧ ⇥↩ ↪ ↾ ⇉ ⇑ ⇒ ⇓ ⇐ ⇔ ⇛ ⇧ ⇨ ⌄ ⌤ ➔ ➜ ➝ ➞ ⟵ ⟶ ⟷ ● ○ ◯ ◔ ◕ ◶ ◌ ◉ ◎ ◦ ◆ ◇ ◈ ◊ ■ □ ▪▫ ◧ ◨ ◩ ◪ ◫ ▲ ▶ ▼ ◀ △ ▷ ▽ ◁ ► ◄ ▻ ◅ ▴ ▸ ▾ ◂ ▵ ▹ ▿ ◃ ⌶ ⍺ ⍶ ⍀ ⍉ ⍥ ⌾ ⍟ ⌽ ⍜ ⍪ ⍢ ⍒ ⍋ ⍙ ⍫ ⍚ ⍱ ⍦ ⍎ ⍊ ⍖ ⍷ ⍩ ⍳ ⍸ ⍤ ⍛ ⍧ ⍅ ⍵ ⍹ ⎕ ⍂ ⌼ ⍠ ⍔ ⍍ ⌺ ⌹ ⍗ ⍌ ⌸ ⍄ ⌻ ⍇ ⍃ ⍯ ⍰ ⍈ ⍁ ⍐ ⍓ ⍞ ⍘ ⍴ ⍆ ⍮ ⌿ ⌷ ⍣ ⍭ ⍨ ⍲ ⍝ ⍡ ⍕ ⍑ ⍏ ⍬ ⚇ ⚠ ✓ ✕ ✗ ✶ @ & ¶ § © ® ™ ° ′ ″ | ¦ † ℓ ‡ № ℮ ␣ ⎋ ⌃ ⌞ ⌟ ⌝ ⌜ ⎊ ⎉ ⌂ ⇪ ⌫ ⌦ ⌨ ⌥ ⇟ ⇞ ⌘ ⏎ ⏻ ⏼ ⭘ ⏽ ⏾ ⌅ � ˳ ˷`}</Text>
        <Text>{`𝔸 𝔹 ℂ 𝔻 𝔼 𝔽 𝔾 ℍ 𝕀 𝕁 𝕂 𝕃 𝕄 ℕ 𝕆 ℙ ℚ ℝ 𝕊 𝕋 𝕌 𝕍 𝕎 𝕏 𝕐 ℤ 𝕒 𝕓 𝕔 𝕕 𝕖 𝕗 𝕘 𝕙 𝕚 𝕛 𝕜 𝕝 𝕞 𝕟 𝕠 𝕡 𝕢 𝕣 𝕤 𝕥 𝕦 𝕧 𝕨 𝕩 𝕪`}</Text>
        <Text>{`▁ ▂ ▃ ▄ ▅ ▆ ▇ █ ▀ ▔ ▏ ▎ ▍ ▌ ▋ ▊ ▉ ▐ ▕ ▖ ▗ ▘ ▙ ▚ ▛ ▜ ▝ ▞ ▟ ░ ▒ ▓`}</Text>
        <Text>{`┌ └ ┐ ┘ ┼ ┬ ┴ ├ ┤ ─ │ ╡ ╢ ╖ ╕ ╣ ║ ╗ ╝ ╜ ╛ ╞ ╟ ╚ ╔ ╩ ╦ ╠ ═ ╬ ╧ ╨ ╤ ╥ ╙ ╘ ╒ ╓ ╫ ╪ ━ ┃ ┄ ┅ ┆ ┇ ┈ ┉ ┊ ┋ ┍ ┎ ┏ ┑ ┒ ┓ ┕ ┖ ┗ ┙ ┚ ┛ ┝ ┞ ┟ ┠ ┡ ┢ ┣ ┥ ┦ ┧ ┨ ┩ ┪ ┫ ┭ ┮ ┯ ┰ ┱ ┲ ┳ ┵ ┶ ┷ ┸ ┹ ┺ ┻ ┽ ┾ ┿ ╀ ╁ ╂ ╃ ╄ ╅ ╆ ╇ ╈ ╉ ╊ ╋ ╌ ╍ ╎ ╏ ╭ ╮ ╯ ╰ ╱ ╲ ╳ ╴ ╵ ╶ ╷ ╸ ╹ ╺ ╻ ╼ ╽ ╾ ╿`}</Text>
        <Text>{`␆ ␈ ␇ ␘ ␍ ␐ ␡ ␔ ␑ ␓ ␒ ␙ ␃ ␄ ␗ ␅ ␛ ␜ ␌ ␝ ␉ ␊ ␕ ␤ ␀ ␞ ␏ ␎ ␠ ␁ ␂ ␚ ␖ ␟ ␋`}</Text>
      </Grid>
      <Grid>
        <ActionListItem icon={`⭢`} href="https://internet.dev" target="_blank">
          Hire our studio to build your applications
        </ActionListItem>
        <ActionListItem icon={`⭢`} href="https://github.com/internet-development/www-sacred" target="_blank">
          View the SRCL source code
        </ActionListItem>
        <ActionListItem icon={`⭢`} href="https://vercel.com/home" target="_blank">
          Try our hosting provider Vercel
        </ActionListItem>
      </Grid>
      <ModalStack />
    </DefaultLayout>
  );
}
