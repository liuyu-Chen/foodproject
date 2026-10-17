<script setup>
import { ref } from 'vue'

const statistics = ref({
  total: 12,
  expiring: 3,
  expired: 1,
  used: 5
})

const expiringFoods = ref([
  {
    id: 1,
    name: '牛奶',
    expiryDate: '2026-10-18',
    remainingDays: 1
  },
  {
    id: 2,
    name: '西红柿',
    expiryDate: '2026-10-19',
    remainingDays: 2
  }
])
</script>

<template>
  <div>
    <h2>系统首页</h2>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <el-statistic title="食材总数" :value="statistics.total" />
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card>
          <el-statistic title="即将过期" :value="statistics.expiring" />
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card>
          <el-statistic title="已经过期" :value="statistics.expired" />
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card>
          <el-statistic title="已经用完" :value="statistics.used" />
        </el-card>
      </el-col>
    </el-row>

    <el-card class="page-card">
      <template #header>
        <strong>即将过期的食材</strong>
      </template>

      <el-table :data="expiringFoods">
        <el-table-column prop="name" label="食材名称" />
        <el-table-column prop="expiryDate" label="过期日期" />

        <el-table-column label="提醒">
          <template #default="{ row }">
            <el-tag type="warning">
              {{ row.remainingDays }}天后过期
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>