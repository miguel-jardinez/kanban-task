import {
  ADD_NEW_BOARD,
  DELETE_BOARD,
  HIDE_SIDEBAR,
  SHOW_SIDEBAR,
} from '@/app/Context/board-context/store/board-types';
import { ActionTypes } from '@/app/Context/board-context/store/actions';

enum StatusBoard {
  TODO = 'Todo',
  DOING = 'Doing',
  DONE = 'Done',
}

interface Subtasks {
  title: string;
  isCompleted: boolean;
}

export interface Tasks {
  title: string;
  description: string;
  status: StatusBoard;
  subtasks: Subtasks[];
}

export interface Columns {
  id: string;
  name: StatusBoard;
  tasks: Tasks[];
}

export interface Board {
  id: string;
  name: string;
  columns: Columns[]
}

export interface InitialState {
  isSideBarOpen: boolean;
  boards: Board[],
}

export const initialState: InitialState = {
  isSideBarOpen: true,
  boards: [
    {
      id: '1',
      name: 'Platform Launch',
      columns: [
        {
          id: 'ounldnoid',
          name: StatusBoard.TODO,
          tasks: [
            {
              title: 'Build UI for onboarding flow',
              description: '',
              status: StatusBoard.TODO,
              subtasks: [
                {
                  title: 'Sign up page',
                  isCompleted: true,
                },
                {
                  title: 'Sign in page',
                  isCompleted: false,
                },
                {
                  title: 'Welcome page',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Build UI for search',
              description: '',
              status: StatusBoard.TODO,
              subtasks: [
                {
                  title: 'Search page',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Build settings UI',
              description: '',
              status: StatusBoard.TODO,
              subtasks: [
                {
                  title: 'Account page',
                  isCompleted: false,
                },
                {
                  title: 'Billing page',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'QA and test all major user journeys',
              description: 'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
              status: StatusBoard.TODO,
              subtasks: [
                {
                  title: 'Internal testing',
                  isCompleted: false,
                },
                {
                  title: 'External testing',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          id: 'liybjlnb',
          name: StatusBoard.DOING,
          tasks: [
            {
              title: 'Design settings and search pages',
              description: '',
              status: StatusBoard.DOING,
              subtasks: [
                {
                  title: 'Settings - Account page',
                  isCompleted: true,
                },
                {
                  title: 'Settings - Billing page',
                  isCompleted: true,
                },
                {
                  title: 'Search page',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Add account management endpoints',
              description: '',
              status: StatusBoard.DOING,
              subtasks: [
                {
                  title: 'Upgrade plan',
                  isCompleted: true,
                },
                {
                  title: 'Cancel plan',
                  isCompleted: true,
                },
                {
                  title: 'Update payment method',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Design onboarding flow',
              description: '',
              status: StatusBoard.DOING,
              subtasks: [
                {
                  title: 'Sign up page',
                  isCompleted: true,
                },
                {
                  title: 'Sign in page',
                  isCompleted: false,
                },
                {
                  title: 'Welcome page',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Add search enpoints',
              description: '',
              status: StatusBoard.DOING,
              subtasks: [
                {
                  title: 'Add search endpoint',
                  isCompleted: true,
                },
                {
                  title: 'Define search filters',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Add authentication endpoints',
              description: '',
              status: StatusBoard.DOING,
              subtasks: [
                {
                  title: 'Define user model',
                  isCompleted: true,
                },
                {
                  title: 'Add auth endpoints',
                  isCompleted: false,
                },
              ],
            },
            {
              title: 'Research pricing points of various competitors and trial different business models',
              description: "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
              status: StatusBoard.DOING,
              subtasks: [
                {
                  title: 'Research competitor pricing and business models',
                  isCompleted: true,
                },
                {
                  title: 'Outline a business model that works for our solution',
                  isCompleted: false,
                },
                {
                  title: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          id: '1iytcrtfyvgbjhk',
          name: StatusBoard.DONE,
          tasks: [
            {
              title: 'Conduct 5 wireframe tests',
              description: 'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
              status: StatusBoard.DONE,
              subtasks: [
                {
                  title: 'Complete 5 wireframe prototype tests',
                  isCompleted: true,
                },
              ],
            },
            {
              title: 'Create wireframe prototype',
              description: 'Create a greyscale clickable wireframe prototype to test our asssumptions so far.',
              status: StatusBoard.DONE,
              subtasks: [
                {
                  title: 'Create clickable wireframe prototype in Balsamiq',
                  isCompleted: true,
                },
              ],
            },
            {
              title: 'Review results of usability tests and iterate',
              description: "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
              status: StatusBoard.DONE,
              subtasks: [
                {
                  title: 'Meet to review notes from previous tests and plan changes',
                  isCompleted: true,
                },
                {
                  title: 'Make changes to paper prototypes',
                  isCompleted: true,
                },
                {
                  title: 'Conduct 5 usability tests',
                  isCompleted: true,
                },
              ],
            },
            {
              title: 'Create paper prototypes and conduct 10 usability tests with potential customers',
              description: '',
              status: StatusBoard.DONE,
              subtasks: [
                {
                  title: 'Create paper prototypes for version one',
                  isCompleted: true,
                },
                {
                  title: 'Complete 10 usability tests',
                  isCompleted: true,
                },
              ],
            },
            {
              title: 'Market discovery',
              description: 'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
              status: StatusBoard.DONE,
              subtasks: [
                {
                  title: 'Interview 10 prospective customers',
                  isCompleted: true,
                },
              ],
            },
            {
              title: 'Competitor analysis',
              description: '',
              status: StatusBoard.DONE,
              subtasks: [
                {
                  title: 'Find direct and indirect competitors',
                  isCompleted: true,
                },
                {
                  title: 'SWOT analysis for each competitor',
                  isCompleted: true,
                },
              ],
            },
            {
              title: 'Research the market',
              description: 'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
              status: StatusBoard.DONE,
              subtasks: [
                {
                  title: 'Write up research analysis',
                  isCompleted: true,
                },
                {
                  title: 'Calculate TAM',
                  isCompleted: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Marketing Plan',
      columns: [],
    },
    {
      id: '3',
      name: 'Roadmap',
      columns: [],
    },
  ],
};

export const reducer = (state: InitialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return { ...state, isSideBarOpen: true };
    case HIDE_SIDEBAR:
      return { ...state, isSideBarOpen: false };
    case ADD_NEW_BOARD:
      return { ...state, boards: [...state.boards, { ...action.payload }] };
    case DELETE_BOARD:
      return { ...state, boards: state.boards };
    default:
      return state;
  }
};
