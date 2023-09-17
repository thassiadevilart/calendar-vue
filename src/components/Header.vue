<template>
  <header>
    <div class="header-elements-wrapper">
      <div class="reload">
        <font-awesome-icon :icon="['fas', 'rotate-right']" />
      </div>

      <div class="year-select">
        <p>2023</p>
        <font-awesome-icon :icon="['fa', 'calendar']" />
      </div>
    </div>
  </header>
</template>

<style>
header {
  background: var(--color-primary);
  width: 100%;
  border-bottom: 1px solid var(--color-surface);
}

.header-elements-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  padding-top: 25px;
  padding-bottom: 25px;
  width: 80%;
}

.reload {
  color: var(--color-surface);
  padding: 10px 10px 10px 0;
  cursor: pointer;
}

.year-select {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 0 10px 10px;
  color: var(--color-surface);
  gap: 10px;
  cursor: pointer;

  & p {
    font-size: 1.1rem;
    padding-top: 4px;
    font-weight: 200;
  }
}
</style>