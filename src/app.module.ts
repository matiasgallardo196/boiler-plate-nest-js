import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { AppLoggerModule } from './common/logger/logger.module';

@Module({
  imports: [AppLoggerModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
