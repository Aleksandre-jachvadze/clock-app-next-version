const base = {
  enter: 'transition-all duration-300',
  leave: 'transition-all duration-300'
}

export const fade = {
  ...base,
  enterFrom: 'opacity-0 absolute',
  enterTo: 'opacity-100 absolute',
  leaveFrom: 'opacity-100 absolute',
  leaveTo: 'opacity-0 absolute'
}
